"use client";

import ScrollAnimation from "@/components/scroll-animation";
import { motion } from "framer-motion";

export default function ContactoPage() {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/5491112345678?text=Hola%20Emanuel,%20me%20interesa%20trabajar%20contigo%20en%20mi%20proyecto%20web",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: "bg-green-500 hover:bg-green-600",
      description: "Chatea directamente conmigo"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/emanuelpulido.dev",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.245-1.297-.49-.317-.245-.49-.49-.49-.98 0-.49.173-.735.49-.98.317-.245.807-.49 1.297-.49s.98.245 1.297.49c.317.245.49.49.49.98 0 .49-.173.735-.49.98-.317.245-.807.49-1.297.49z"/>
        </svg>
      ),
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      description: "Mira mi trabajo y proyectos"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/emanuelpulido.dev",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Conecta conmigo en Facebook"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Conectemos
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? ¡Hablemos! Elige la forma que prefieras para contactarme.
            </p>
          </div>
        </ScrollAnimation>

        {/* Información de contacto */}
        <ScrollAnimation delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-foreground/70">emanuelpulido.dev@gmail.com</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Respuesta</h3>
              <p className="text-foreground/70">En menos de 1 hora</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-foreground/70">Argentina</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Redes Sociales */}
        <ScrollAnimation delay={0.4}>
          <div className="bg-background/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Sígueme en redes sociales
              </h2>
              <p className="text-foreground/70 max-w-lg mx-auto">
                Conecta conmigo en las plataformas que prefieras. ¡Estoy activo en todas!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-xl p-8 text-center text-white transition-all duration-300 hover:scale-105 ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Fondo con patrón */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Contenido */}
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {social.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{social.name}</h3>
                    <p className="text-white/90 text-sm">{social.description}</p>
                    
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Email directo */}
        <ScrollAnimation delay={0.6}>
          <div className="mt-16 text-center">
            <div className="bg-background/20 backdrop-blur-sm border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-3 text-xl">¿Prefieres escribirme directamente?</h3>
              <p className="text-foreground/70 mb-6">
                Si prefieres el email tradicional, no hay problema. Te responderé en menos de 1 hora.
              </p>
              <a
                href="mailto:emanuelpulido.dev@gmail.com?subject=Hola%20Emanuel,%20me%20interesa%20trabajar%20contigo&body=Hola%20Emanuel,%0A%0AMe%20interesa%20trabajar%20contigo%20en%20mi%20proyecto%20web.%0A%0APor%20favor%20cuéntame%20más%20sobre%20tus%20servicios%20y%20precios.%0A%0ASaludos!"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar email
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}


