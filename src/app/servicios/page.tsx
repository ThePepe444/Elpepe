"use client";

import ScrollAnimation from "@/components/scroll-animation";
import { motion } from "framer-motion";

export default function ServiciosPage() {
  const services = [
    {
      title: "Landing Page Optimizada",
      description: "Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Optimizadas para SEO y conversión.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Diseño conversivo", "Optimización SEO", "Velocidad de carga", "Responsive design"],
      price: "Desde $1,500",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sitio Corporativo",
      description: "Sitios web profesionales para empresas que necesitan una presencia digital sólida y confiable.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["Múltiples páginas", "Panel de administración", "Blog integrado", "Formularios de contacto"],
      price: "Desde $3,500",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce (Headless)",
      description: "Tiendas online modernas con arquitectura headless para máxima flexibilidad y rendimiento.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: ["Arquitectura headless", "Pagos seguros", "Gestión de inventario", "Analytics avanzado"],
      price: "Desde $8,000",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mantenimiento y Mejoras",
      description: "Servicios de mantenimiento continuo, actualizaciones y mejoras para mantener tu sitio al día.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ["Actualizaciones de seguridad", "Backups automáticos", "Optimización continua", "Soporte técnico"],
      price: "Desde $200/mes",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Mis Servicios
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Desarrollo de sitios web rápidos, accesibles y orientados a conversión. 
              Cada proyecto es único y diseñado para maximizar el retorno de inversión.
            </p>
          </div>
        </ScrollAnimation>

        {/* Servicios Grid */}
        <ScrollAnimation delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-background/30 backdrop-blur-sm border border-border p-8 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                {/* Icono con gradiente */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Contenido */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Características */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground/60 uppercase tracking-wide">Incluye:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Precio */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                </div>

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation delay={0.4}>
          <div className="text-center">
            <div className="bg-background/20 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                ¿Listo para empezar tu proyecto?
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Cada proyecto es único. Contáctame para discutir tus necesidades específicas y obtener una propuesta personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Hablar sobre mi proyecto
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-background/50 border border-border text-foreground rounded-lg font-semibold hover:bg-background/70 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Ver mi trabajo
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}


