# 🚀 EmanuelPulido.dev - Sitio Web Freelancer

Sitio web personal para servicios de desarrollo web freelance, construido con Next.js 15, TypeScript y Tailwind CSS.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con animaciones suaves
- **📱 Responsive**: Optimizado para todos los dispositivos
- **⚡ Performance**: Carga rápida con Next.js 15 y Turbopack
- **🎭 Animaciones**: Efectos interactivos con Framer Motion
- **🌊 Fondo Dinámico**: Animación Three.js con efecto dither
- **🔍 SEO Optimizado**: Metadatos completos y estructura semántica

## 🛠️ Tecnologías

- **Framework**: Next.js 15.5.1
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **3D Graphics**: Three.js, OGL
- **Bundler**: Turbopack
- **Deployment**: Netlify

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ThePepe444/Elpepe.git
   cd Elpepe/freelancer-site
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-usuario
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── site-header.tsx    # Header del sitio
│   ├── site-footer.tsx    # Footer del sitio
│   ├── blur-text.tsx      # Texto con efecto blur
│   ├── tilted-card.tsx    # Tarjetas 3D inclinadas
│   ├── profile-card.tsx   # Tarjeta de perfil
│   ├── scroll-animation.tsx # Animaciones de scroll
│   └── dither.tsx         # Fondo animado Three.js
└── lib/                   # Utilidades y configuraciones
```

## 🎨 Componentes Principales

### BlurText
Texto hero con animación de blur y efectos de movimiento.

### TiltedCard
Tarjetas 3D con efecto de inclinación al pasar el mouse.

### ProfileCard
Tarjeta de perfil interactiva con efectos de tilt y gradientes.

### Dither
Fondo animado con efecto dither usando Three.js y shaders.

### ScrollAnimation
Animaciones de entrada basadas en scroll con Framer Motion.

### Redes Sociales
Iconos de contacto directo con WhatsApp, Instagram y Facebook para una comunicación más moderna y directa.

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo con Turbopack
npm run build        # Build de producción (estático)
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos TypeScript
```

## 🌐 Deployment en Netlify

### Configuración Automática
El proyecto está configurado para deploy automático en Netlify:

1. **Conectar repositorio a Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Conecta tu repositorio de GitHub
   - Netlify detectará automáticamente la configuración

2. **Configuración de Build**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `out`
   - **Node Version**: 18

3. **Variables de Entorno (Opcional)**
   ```env
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-usuario
   ```

### Deploy Manual
```bash
# Construir el proyecto
npm run build

# Los archivos estáticos se generarán en la carpeta /out
# Subir la carpeta /out a Netlify
```

### Archivos de Configuración
- `netlify.toml`: Configuración específica para Netlify
- `next.config.ts`: Configuración para export estático

## 📝 Personalización

### Cambiar Información Personal
Editar `src/app/page.tsx`:
- Nombre y título
- Descripción de servicios
- Enlaces de contacto

### Modificar Colores
Editar `src/app/globals.css`:
- Variables CSS para colores
- Paleta de colores personalizada

### Añadir Nuevas Secciones
1. Crear componente en `src/components/`
2. Importar en `src/app/page.tsx`
3. Añadir con `ScrollAnimation`

### Configurar Redes Sociales
1. **WhatsApp**: Actualizar el número en `src/app/contacto/page.tsx` (línea 8)
2. **Instagram**: Actualizar el usuario en la URL (línea 20)
3. **Facebook**: Actualizar el usuario en la URL (línea 32)

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **WhatsApp**: [Enlace directo](https://api.whatsapp.com/message/N4ZUYZ5SK2MNE1?autoload=1&app_absent=0)
- **Instagram**: [@emanuelpulido.dev](https://www.instagram.com/emanuelpulido.dev/)
- **Facebook**: [ElPepe0444](https://www.facebook.com/ElPepe0444)
- **Email**: emmanuelpulido.dev@gmail.com

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
