"use client";

import ScrollAnimation from "@/components/scroll-animation";
import { motion } from "framer-motion";

export default function SobreMiPage() {
  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "PostgreSQL", level: 70 }
  ];

  const values = [
    {
      title: "Calidad",
      description: "Cada línea de código está pensada para rendimiento y mantenibilidad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Comunicación",
      description: "Mantengo una comunicación clara y constante durante todo el proyecto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Resultados",
      description: "Me enfoco en crear soluciones que generen valor real para tu negocio.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Sobre mí
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Soy un desarrollador web orientado a negocio. Me enfoco en velocidad, 
              SEO y conversión, construyendo experiencias que generen resultados reales.
            </p>
          </div>
        </ScrollAnimation>

        {/* Historia personal */}
        <ScrollAnimation delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Mi historia
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Hola, soy Emanuel Pulido. Mi pasión por el desarrollo web comenzó cuando 
                  descubrí cómo la tecnología puede transformar negocios y mejorar la vida 
                  de las personas.
                </p>
                <p>
                  Me especializo en crear sitios web modernos, rápidos y orientados a 
                  conversión. Cada proyecto que desarrollo está pensado para generar 
                  resultados medibles y un retorno de inversión claro.
                </p>
                <p>
                  Creo en la importancia de la comunicación clara, la calidad del código 
                  y la entrega puntual. Mi objetivo es convertirme en tu socio tecnológico 
                  de confianza.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-foreground/60">Foto de perfil</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Mis valores */}
        <ScrollAnimation delay={0.4}>
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Mis valores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="group relative overflow-hidden rounded-xl bg-background/30 backdrop-blur-sm border border-border p-6 hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Habilidades técnicas */}
        <ScrollAnimation delay={0.6}>
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Habilidades técnicas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {skills.slice(0, 3).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + 0.1 * index, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-6">
                {skills.slice(3).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + 0.1 * index, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Enfoque de trabajo */}
        <ScrollAnimation delay={0.8}>
          <div className="mb-16">
            <div className="bg-background/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Mi enfoque de trabajo
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Consulta",
                    description: "Entendemos tus necesidades y objetivos del proyecto"
                  },
                  {
                    step: "02",
                    title: "Planificación",
                    description: "Desarrollamos una estrategia clara y timeline detallado"
                  },
                  {
                    step: "03",
                    title: "Desarrollo",
                    description: "Construimos tu proyecto con las mejores prácticas"
                  },
                  {
                    step: "04",
                    title: "Entrega",
                    description: "Lanzamos tu proyecto y te damos soporte continuo"
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{phase.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{phase.title}</h3>
                    <p className="text-sm text-foreground/70">{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation delay={1.0}>
          <div className="text-center">
            <div className="bg-background/20 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                ¿Listo para trabajar juntos?
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Si buscas un desarrollador comprometido con la calidad y los resultados, 
                estoy aquí para ayudarte a hacer realidad tu proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Hablemos de tu proyecto
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


