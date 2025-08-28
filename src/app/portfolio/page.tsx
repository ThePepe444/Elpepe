"use client";

import ScrollAnimation from "@/components/scroll-animation";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Mi Portfolio
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Estoy construyendo mi portafolio de proyectos. Cada proyecto será único y diseñado 
              específicamente para las necesidades del cliente, optimizado para rendimiento y conversión.
            </p>
          </div>
        </ScrollAnimation>

        {/* Estado actual */}
        <ScrollAnimation delay={0.2}>
          <div className="text-center mb-16">
            <div className="bg-background/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Construyendo mi portafolio
              </h2>
              
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Actualmente estoy enfocado en desarrollar proyectos de calidad para mis primeros clientes. 
                Cada proyecto será documentado aquí con detalles sobre las tecnologías utilizadas, 
                desafíos resueltos y resultados obtenidos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Proyectos Reales</h3>
                  <p className="text-sm text-foreground/60">Solo trabajo real con clientes</p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Rendimiento</h3>
                  <p className="text-sm text-foreground/60">Optimizado para velocidad</p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Conversión</h3>
                  <p className="text-sm text-foreground/60">Enfocado en resultados</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Tipos de proyectos que haré */}
        <ScrollAnimation delay={0.4}>
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tipos de proyectos que desarrollaré
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Landing Pages",
                  description: "Páginas de aterrizaje optimizadas para conversión con diseño moderno y velocidad de carga rápida.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Sitios Corporativos",
                  description: "Sitios web profesionales para empresas con múltiples páginas, blog y panel de administración.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "E-commerce",
                  description: "Tiendas online modernas con gestión de productos, pagos seguros y experiencia de compra optimizada.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  ),
                  color: "from-green-500 to-emerald-500"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl bg-background/30 backdrop-blur-sm border border-border p-6 hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center">
            <div className="bg-background/20 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                ¿Quieres ser mi primer proyecto?
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Estoy buscando mi primer cliente para crear algo increíble juntos. 
                Serás parte de mi historia desde el principio y tendrás mi dedicación completa.
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
                  href="/servicios"
                  className="inline-flex items-center px-8 py-4 bg-background/50 border border-border text-foreground rounded-lg font-semibold hover:bg-background/70 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Ver mis servicios
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}


