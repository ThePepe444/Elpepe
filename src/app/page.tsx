"use client";

import Link from "next/link";
import BlurText from "@/components/blur-text";
import TiltedCard from "@/components/tilted-card";
import ScrollAnimation from "@/components/scroll-animation";
import ProfileCard from "@/components/profile-card";

export default function Home() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "/contacto";
  const isExternal = /^https?:\/\//i.test(calendlyUrl);

  return (
    <div className="space-y-24">
      {/* Hero BlurText a pantalla completa */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center">
        <div className="overflow-x-auto px-4">
          <BlurText
            text="Sitios web que convierten clientes"
            delay={150}
            animateBy="words"
            direction="top"
            className="whitespace-nowrap text-[clamp(18px,4.5vw,52px)] sm:text-[clamp(24px,4vw,60px)] md:text-[clamp(28px,3.6vw,72px)] lg:text-[clamp(32px,3vw,84px)] font-bold tracking-tight text-center"
          />
        </div>
      </section>

      {/* Servicios con TiltedCard */}
      <section id="servicios" className="mx-auto max-w-5xl px-4">
        <ScrollAnimation>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">Servicios</h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <p className="mt-2 text-foreground/80 max-w-2xl mx-auto text-center">Soluciones a medida para tu negocio.</p>
        </ScrollAnimation>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <ScrollAnimation delay={0.3}>
            <TiltedCard
              imageSrc="/next.svg"
              captionText="Landing page"
              containerHeight="260px"
              imageHeight="260px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<span>Optimizada para performance</span>}
              variant="brand"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <TiltedCard
              imageSrc="/window.svg"
              captionText="Sitio corporativo"
              containerHeight="260px"
              imageHeight="260px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<span>Arquitectura clara y editable</span>}
              variant="brand"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.5}>
            <TiltedCard
              imageSrc="/globe.svg"
              captionText="E‑commerce"
              containerHeight="260px"
              imageHeight="260px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<span>Headless y escalable</span>}
              variant="dark"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.6}>
            <TiltedCard
              imageSrc="/file.svg"
              captionText="Mantenimiento"
              containerHeight="260px"
              imageHeight="260px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<span>Mejoras continuas y soporte</span>}
              variant="dark"
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-5xl px-4">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">En busca del primer proyecto</h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <p className="mt-2 text-foreground/80 max-w-2xl mx-auto text-center">
            Estoy listo para crear tu primer proyecto. ¿Serás el primero en confiar en mis habilidades?
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <div className="mt-8 flex justify-center">
            <ProfileCard
              name="Puedes ser tú"
              title="Mi primer proyecto"
              handle="proyecto-destacado"
              status="En desarrollo"
              contactText="¡Quiero ser el primero!"
              avatarUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "/contacto";
                if (/^https?:\/\//i.test(calendlyUrl)) {
                  window.open(calendlyUrl, '_blank');
                } else {
                  window.location.href = calendlyUrl;
                }
              }}
            />
          </div>
        </ScrollAnimation>

      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-16">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-4">Sobre mí</h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <p className="text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            Soy un desarrollador apasionado por crear experiencias digitales que no solo se ven bien, sino que generan resultados reales para tu negocio.
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Información personal */}
          <div className="space-y-8">
            <ScrollAnimation delay={0.3}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enfoque en Resultados</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      No solo creo sitios web bonitos. Desarrollo soluciones que convierten visitantes en clientes, 
                      optimizando cada elemento para maximizar el retorno de inversión.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tecnologías Modernas</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Utilizo las últimas tecnologías web como Next.js, React, y TypeScript para crear 
                      aplicaciones rápidas, escalables y mantenibles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experiencia Móvil</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Diseño pensando en todos los dispositivos. Tu sitio web se verá y funcionará 
                      perfectamente en móviles, tablets y computadoras.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 rounded-xl p-6 border border-gray-500/20">
                <h4 className="text-lg font-semibold mb-3">¿Por qué trabajar conmigo?</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span>Comunicación clara y transparente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>Entregas a tiempo y dentro del presupuesto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Soporte post-lanzamiento incluido</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>Enfoque en SEO y rendimiento</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          {/* Columna derecha - Estadísticas y habilidades */}
          <div className="space-y-8">
            <ScrollAnimation delay={0.5}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-600/20 border border-gray-500/30">
                  <div className="text-3xl font-bold text-gray-300 mb-2">100%</div>
                  <div className="text-sm text-foreground/70">Proyectos Completados</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-500/20 border border-gray-400/30">
                  <div className="text-3xl font-bold text-gray-200 mb-2">24/7</div>
                  <div className="text-sm text-foreground/70">Soporte Disponible</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-400/20 border border-gray-300/30">
                  <div className="text-3xl font-bold text-gray-100 mb-2">+50%</div>
                  <div className="text-sm text-foreground/70">Mejora en Conversiones</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-600/30 to-gray-300/20 border border-gray-200/30">
                  <div className="text-3xl font-bold text-white mb-2">5+</div>
                  <div className="text-sm text-foreground/70">Años de Experiencia</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Tecnologías que domino</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">R</span>
                    </div>
                    <span className="text-sm">React</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">N</span>
                    </div>
                    <span className="text-sm">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                    <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="text-sm">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                    <div className="w-8 h-8 bg-gray-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="text-sm">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.7}>
              <div className="bg-gradient-to-r from-gray-900/20 via-gray-800/20 to-gray-700/20 rounded-xl p-6 border border-gray-500/20">
                <h4 className="text-lg font-semibold mb-3">Mi filosofía</h4>
                <p className="text-foreground/80 leading-relaxed">
                  "Creo que cada proyecto web debe ser más que solo código. Debe ser una herramienta 
                  que impulse tu negocio hacia adelante, conecte con tu audiencia y genere resultados 
                  medibles. Mi objetivo es convertir tus ideas en experiencias digitales excepcionales."
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA final - ¿Listo para impulsar tu negocio? */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <ScrollAnimation>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-700/40 border border-gray-500/30 p-8 sm:p-12">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 via-transparent to-gray-400/10"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gray-600/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gray-500/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <ScrollAnimation delay={0.1}>
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-600/30 mb-6">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300 font-medium">Disponible para nuevos proyectos</span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  ¿Listo para impulsar tu negocio?
                </h2>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Transformemos tu visión en una presencia digital que genere resultados reales. 
                  Desde la primera conversación hasta el lanzamiento, estaré contigo en cada paso.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-gray-800/30 border border-gray-600/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-gray-200">Estrategia Clara</h4>
                    <p className="text-sm text-foreground/70 text-center">Definimos objetivos y plan de acción</p>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-gray-800/30 border border-gray-600/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-gray-200">Desarrollo Rápido</h4>
                    <p className="text-sm text-foreground/70 text-center">Implementación eficiente y moderna</p>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-gray-800/30 border border-gray-600/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <h4 className="font-semibold text-gray-200">Resultados Medibles</h4>
                    <p className="text-sm text-foreground/70 text-center">Seguimiento y optimización continua</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    {isExternal ? (
                      <a
                        href={calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 text-lg font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                      >
                        <span>📅</span>
                        <span>Agendar consulta gratuita</span>
                      </a>
                    ) : (
                      <Link
                        href={calendlyUrl}
                        className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 text-lg font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                      >
                        <span>📅</span>
                        <span>Agendar consulta gratuita</span>
                      </Link>
                    )}
                    
                    <a
                      href="mailto:hola@emanuelpulido.dev"
                      className="inline-flex items-center space-x-2 rounded-xl border border-gray-600 text-gray-300 px-8 py-4 text-lg font-semibold hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                    >
                      <span>✉️</span>
                      <span>Enviar mensaje</span>
                    </a>
                  </div>
                  
                  <p className="text-sm text-foreground/60">
                    Sin compromisos • Respuesta en 24h • Consulta 100% gratuita
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
