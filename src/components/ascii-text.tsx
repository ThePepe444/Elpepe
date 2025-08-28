"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;

const PX_RATIO = typeof window !== "undefined" ? window.devicePixelRatio : 1;

class AsciiFilter {
  renderer: THREE.WebGLRenderer;
  domElement: HTMLDivElement;
  pre: HTMLPreElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  deg: number = 0;
  invert: boolean;
  fontSize: number;
  fontFamily: string;
  charset: string;
  width = 0;
  height = 0;
  center = { x: 0, y: 0 };
  mouse = { x: 0, y: 0 };

  constructor(renderer: THREE.WebGLRenderer, { fontSize, fontFamily, charset, invert }: { fontSize?: number; fontFamily?: string; charset?: string; invert?: boolean } = {}) {
    this.renderer = renderer;
    this.domElement = document.createElement("div");
    this.domElement.style.position = "absolute";
    this.domElement.style.top = "0";
    this.domElement.style.left = "0";
    this.domElement.style.width = "100%";
    this.domElement.style.height = "100%";

    this.pre = document.createElement("pre");
    this.domElement.appendChild(this.pre);

    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.domElement.appendChild(this.canvas);

    this.invert = invert ?? true;
    this.fontSize = fontSize ?? 12;
    this.fontFamily = fontFamily ?? "'Courier New', monospace";
    this.charset =
      charset ??
      " .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

    this.onMouseMove = this.onMouseMove.bind(this);
    document.addEventListener("mousemove", this.onMouseMove);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.renderer.setSize(width, height);
    this.reset();

    this.center = { x: width / 2, y: height / 2 };
    this.mouse = { x: this.center.x, y: this.center.y };
  }

  reset() {
    if (!this.context) return;
    this.context.font = `${this.fontSize}px ${this.fontFamily}`;
    const charWidth = this.context.measureText("A").width;

    const cols = Math.floor(this.width / (this.fontSize * (charWidth / this.fontSize)));
    const rows = Math.floor(this.height / this.fontSize);

    this.canvas.width = cols;
    this.canvas.height = rows;
    this.pre.style.fontFamily = this.fontFamily;
    this.pre.style.fontSize = `${this.fontSize}px`;
    this.pre.style.margin = "0";
    this.pre.style.padding = "0";
    this.pre.style.lineHeight = "1em";
    this.pre.style.position = "absolute";
    this.pre.style.left = "50%";
    this.pre.style.top = "50%";
    this.pre.style.transform = "translate(-50%, -50%)";
    this.pre.style.zIndex = "9";
    this.pre.style.backgroundAttachment = "fixed";
    this.pre.style.mixBlendMode = "difference";
  }

  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.renderer.render(scene, camera);

    const w = this.canvas.width;
    const h = this.canvas.height;
    if (!this.context) return;
    this.context.clearRect(0, 0, w, h);
    if (w && h) {
      this.context.drawImage(this.renderer.domElement, 0, 0, w, h);
    }

    this.asciify(this.context, w, h);
    this.hue();
  }

  onMouseMove(e: MouseEvent) {
    this.mouse = { x: e.clientX * PX_RATIO, y: e.clientY * PX_RATIO };
  }

  get dx() {
    return this.mouse.x - this.center.x;
  }

  get dy() {
    return this.mouse.y - this.center.y;
  }

  hue() {
    const deg = (Math.atan2(this.dy, this.dx) * 180) / Math.PI;
    this.deg += (deg - this.deg) * 0.075;
    this.domElement.style.filter = `hue-rotate(${this.deg.toFixed(1)}deg)`;
  }

  asciify(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const charset = " .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
    if (w && h) {
      const imgData = ctx.getImageData(0, 0, w, h).data;
      let str = "";
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = x * 4 + y * 4 * w;
          const r = imgData[i];
          const g = imgData[i + 1];
          const b = imgData[i + 2];
          const a = imgData[i + 3];

          if (a === 0) {
            str += " ";
            continue;
          }

          const gray = (0.3 * r + 0.6 * g + 0.1 * b) / 255;
          let idx = Math.floor((1 - gray) * (charset.length - 1));
          idx = charset.length - idx - 1;
          str += charset[idx];
        }
        str += "\n";
      }
      this.pre.innerHTML = str;
    }
  }

  dispose() {
    document.removeEventListener("mousemove", this.onMouseMove);
  }
}

class CanvasTxt {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  txt: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  font: string;

  constructor(txt: string, { fontSize = 200, fontFamily = "Arial", color = "#fdf9f3" } = {}) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.txt = txt;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.color = color;

    this.font = `600 ${this.fontSize}px ${this.fontFamily}`;
  }

  resize() {
    if (!this.context) return;
    this.context.font = this.font;
    const metrics = this.context.measureText(this.txt);

    const textWidth = Math.ceil(metrics.width) + 20;
    const textHeight = Math.ceil(metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) + 20;

    this.canvas.width = textWidth;
    this.canvas.height = textHeight;
  }

  render() {
    if (!this.context) return;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.color;
    this.context.font = this.font;

    const metrics = this.context.measureText(this.txt);
    const yPos = 10 + metrics.actualBoundingBoxAscent;

    this.context.fillText(this.txt, 10, yPos);
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  get texture() {
    return this.canvas;
  }
}

class CanvAscii {
  textString: string;
  asciiFontSize: number;
  textFontSize: number;
  textColor: string;
  planeBaseHeight?: number;
  enableWaves: boolean;
  container: HTMLDivElement;
  width: number;
  height: number;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  mouse: { x: number; y: number };
  geometry!: THREE.PlaneGeometry;
  material!: THREE.ShaderMaterial;
  mesh!: THREE.Mesh;
  textCanvas!: CanvasTxt;
  texture!: THREE.CanvasTexture;
  renderer!: THREE.WebGLRenderer;
  filter!: AsciiFilter;
  center!: { x: number; y: number };
  animationFrameId?: number;

  constructor(
    { text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves }:
      { text: string; asciiFontSize: number; textFontSize: number; textColor: string; planeBaseHeight?: number; enableWaves: boolean; },
    containerElem: HTMLDivElement,
    width: number,
    height: number
  ) {
    this.textString = text;
    this.asciiFontSize = asciiFontSize;
    this.textFontSize = textFontSize;
    this.textColor = textColor;
    this.planeBaseHeight = planeBaseHeight;
    this.container = containerElem;
    this.width = width;
    this.height = height;
    this.enableWaves = enableWaves;

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
    this.camera.position.z = 30;

    this.scene = new THREE.Scene();
    this.mouse = { x: 0, y: 0 };

    this.onMouseMove = this.onMouseMove.bind(this);

    this.setMesh();
    this.setRenderer();
  }

  setMesh() {
    this.textCanvas = new CanvasTxt(this.textString, {
      fontSize: this.textFontSize,
      fontFamily: "IBM Plex Mono",
      color: this.textColor,
    });
    this.textCanvas.resize();
    this.textCanvas.render();

    this.texture = new THREE.CanvasTexture(this.textCanvas.texture);
    this.texture.minFilter = THREE.NearestFilter;

    const textAspect = this.textCanvas.width / this.textCanvas.height;
    // Compute a base height that fits within the current camera frustum if not provided
    let baseH = this.planeBaseHeight ?? 0;
    if (!baseH || baseH <= 0) {
      const vFOV = THREE.MathUtils.degToRad(this.camera.fov);
      const maxWorldHeight = 2 * Math.tan(vFOV / 2) * this.camera.position.z; // visible height at z=0
      const maxWorldWidth = maxWorldHeight * (this.width / this.height);
      const margin = 0.85; // leave some breathing space
      const byHeight = maxWorldHeight * margin;
      const byWidth = (maxWorldWidth * margin) / textAspect;
      baseH = Math.min(byHeight, byWidth);
    }
    const planeW = baseH * textAspect;
    const planeH = baseH;

    this.geometry = new THREE.PlaneGeometry(planeW, planeH, 36, 36);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        mouse: { value: 1.0 },
        uTexture: { value: this.texture },
        uEnableWaves: { value: this.enableWaves ? 1.0 : 0.0 },
      },
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(0x000000, 0);

    this.filter = new AsciiFilter(this.renderer, {
      fontFamily: "IBM Plex Mono",
      fontSize: this.asciiFontSize,
      invert: true,
    });

    this.container.appendChild(this.filter.domElement);
    this.setSize(this.width, this.height);

    this.container.addEventListener("mousemove", this.onMouseMove as unknown as EventListener);
    this.container.addEventListener("touchmove", this.onMouseMove as unknown as EventListener);
  }

  setSize(w: number, h: number) {
    this.width = w;
    this.height = h;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.filter.setSize(w, h);

    this.center = { x: w / 2, y: h / 2 };
  }

  load() {
    this.animate();
  }

  onMouseMove(evt: MouseEvent | TouchEvent) {
    const e = (evt as TouchEvent).touches ? (evt as TouchEvent).touches![0] : (evt as MouseEvent);
    const bounds = this.container.getBoundingClientRect();
    const x = (e as MouseEvent).clientX - bounds.left;
    const y = (e as MouseEvent).clientY - bounds.top;
    this.mouse = { x, y };
  }

  animate() {
    const animateFrame = () => {
      this.animationFrameId = requestAnimationFrame(animateFrame);
      this.render();
    };
    animateFrame();
  }

  render() {
    const time = new Date().getTime() * 0.001;

    this.textCanvas.render();
    this.texture.needsUpdate = true;

    (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value = Math.sin(time);

    this.updateRotation();
    this.filter.render(this.scene, this.camera);
  }

  updateRotation() {
    const x = ((this.mouse.y - 0) / (this.height - 0)) * (-0.5 - 0.5) + 0.5;
    const y = ((this.mouse.x - 0) / (this.width - 0)) * (0.5 - -0.5) + -0.5;

    this.mesh.rotation.x += (x - this.mesh.rotation.x) * 0.05;
    this.mesh.rotation.y += (y - this.mesh.rotation.y) * 0.05;
  }

  clear() {
    this.scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>;
      if ((mesh as unknown as { isMesh?: boolean }).isMesh) {
        const mat = mesh.material;
        const disposeMaterial = (m: THREE.Material) => {
          m.dispose();
        };
        if (Array.isArray(mat)) mat.forEach(disposeMaterial); else disposeMaterial(mat);
        mesh.geometry.dispose();
      }
    });
    this.scene.clear();
  }

  dispose() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.filter.dispose();
    this.container.removeChild(this.filter.domElement);
    this.container.removeEventListener("mousemove", this.onMouseMove as unknown as EventListener);
    this.container.removeEventListener("touchmove", this.onMouseMove as unknown as EventListener);
    this.clear();
    this.renderer.dispose();
  }
}

export default function ASCIIText({
  text = "Sitios web que convierten clientes",
  asciiFontSize = 8,
  textFontSize = 200,
  textColor = "#fdf9f3",
  planeBaseHeight,
  enableWaves = true,
}: {
  text?: string;
  asciiFontSize?: number;
  textFontSize?: number;
  textColor?: string;
  planeBaseHeight?: number;
  enableWaves?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const asciiRef = useRef<CanvAscii | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();

    const boot = (w: number, h: number) => {
      asciiRef.current = new CanvAscii(
        { text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves },
        containerRef.current as HTMLDivElement,
        w,
        h
      );
      asciiRef.current.load();
    };

    if (width === 0 || height === 0) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.width > 0 && entry.boundingClientRect.height > 0) {
          const { width: w, height: h } = entry.boundingClientRect;
          boot(w, h);
          observer.disconnect();
        }
      }, { threshold: 0.1 });
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
        asciiRef.current?.dispose();
      };
    }

    boot(width, height);

    const ro = new ResizeObserver((entries) => {
      if (!entries[0] || !asciiRef.current) return;
      const { width: w, height: h } = entries[0].contentRect;
      if (w > 0 && h > 0) {
        asciiRef.current.setSize(w, h);
      }
    });
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      asciiRef.current?.dispose();
    };
  }, [text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves]);

  return (
    <div
      ref={containerRef}
      className="ascii-text-container"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');

        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }

        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: left;
          position: absolute;
          left: 0;
          top: 0;
          background-image: radial-gradient(circle, #ff6188 0%, #fc9867 50%, #ffd866 100%);
          background-attachment: fixed;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          z-index: 9;
          mix-blend-mode: difference;
        }
      `}</style>
    </div>
  );
}


