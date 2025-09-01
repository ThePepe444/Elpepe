# 🚀 Guía de Deploy en Netlify - EmanuelPulido.dev

## ✅ Configuración Completada

Tu proyecto está **completamente configurado** para deploy en Netlify. Todos los archivos necesarios han sido creados y el build estático funciona correctamente.

## 📁 Archivos de Configuración Creados

- ✅ `netlify.toml` - Configuración específica para Netlify
- ✅ `next.config.ts` - Configurado para export estático
- ✅ `package.json` - Scripts de build actualizados
- ✅ `README.md` - Documentación actualizada

## 🚀 Pasos para Deploy

### Opción 1: Deploy Automático (Recomendado)

1. **Ve a [netlify.com](https://netlify.com)**
2. **Crea una cuenta** o inicia sesión
3. **Haz clic en "New site from Git"**
4. **Conecta tu repositorio de GitHub**: `https://github.com/ThePepe444/Elpepe.git`
5. **Netlify detectará automáticamente la configuración**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

6. **Haz clic en "Deploy site"**

### Opción 2: Deploy Manual

1. **Construye el proyecto localmente**:
   ```bash
   cd freelancer-site
   npm run build
   ```

2. **Sube la carpeta `out` a Netlify**:
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra la carpeta `out` al área de deploy
   - Netlify subirá y publicará tu sitio

## ⚙️ Configuración de Build

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
```

## 🔧 Variables de Entorno (Opcional)

Si quieres configurar Calendly, añade en Netlify:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-usuario
```

## 📊 Estadísticas del Build

- **Tamaño total**: ~152 kB (First Load JS)
- **Páginas generadas**: 6 páginas estáticas
- **Optimización**: Completamente optimizado para producción

## 🌐 URLs del Sitio

Una vez deployado, tu sitio tendrá estas URLs:

- **Página Principal**: `/`
- **Servicios**: `/servicios/`
- **Portfolio**: `/portfolio/`
- **Sobre Mí**: `/sobre-mi/`
- **Contacto**: `/contacto/`

## ✅ Verificación

Después del deploy, verifica que:

1. ✅ Todas las páginas cargan correctamente
2. ✅ Las animaciones funcionan
3. ✅ Los enlaces de contacto funcionan
4. ✅ El diseño es responsive
5. ✅ El fondo animado se muestra

## 🆘 Solución de Problemas

### Si el deploy falla:

1. **Verifica que el repositorio esté público**
2. **Asegúrate de que la rama principal sea `main` o `master`**
3. **Revisa los logs de build en Netlify**

### Si las animaciones no funcionan:

1. **Verifica que JavaScript esté habilitado**
2. **Espera unos segundos para que carguen los componentes 3D**

## 🎉 ¡Listo!

Tu sitio web estará disponible en una URL como:
`https://tu-sitio.netlify.app`

Puedes configurar un dominio personalizado más tarde en la configuración de Netlify.

---

**¡Tu portfolio profesional está listo para conquistar el mundo! 🌟**
