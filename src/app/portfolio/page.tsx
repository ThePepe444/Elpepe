"use client";

import ScrollAnimation from "@/components/scroll-animation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "landing", name: "Landing Pages" },
    { id: "corporate", name: "Sitios Corporativos" },
    { id: "ecommerce", name: "E-commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart Landing",
      category: "landing",
      description: "Landing page para startup de tecnología con enfoque en conversión y velocidad.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      results: {
        conversion: "+45%",
        speed: "0.8s",
        mobile: "98/100"
      },
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "EcoCorp Website",
      category: "corporate",
      description: "Sitio corporativo completo para empresa de energías renovables con blog y panel admin.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      results: {
        traffic: "+120%",
        engagement: "+67%",
        leads: "+89%"
      },
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "FashionStore E-commerce",
      category: "ecommerce",
      description: "Tienda online headless con gestión de inventario y múltiples métodos de pago.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Stripe", "Sanity CMS", "Vercel"],
      results: {
        sales: "+200%",
        conversion: "+78%",
        performance: "95/100"
      },
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "RestaurantApp",
      category: "landing",
      description: "Aplicación web para restaurante con menú digital, reservas y delivery.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      results: {
        orders: "+150%",
        satisfaction: "4.8/5",
        efficiency: "+60%"
      },
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "LawFirm Portal",
      category: "corporate",
      description: "Portal web para firma de abogados con sistema de citas y documentación.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Auth.js", "Supabase", "Stripe"],
      results: {
        clients: "+85%",
        efficiency: "+70%",
        satisfaction: "4.9/5"
      },
      link: "#",
      featured: false
    },
    {
      id: 6,
      title: "FitnessShop",
      category: "ecommerce",
      description: "Tienda online de productos fitness con sistema de membresías y entrenamientos.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Shopify", "Algolia", "Klaviyo"],
      results: {
        revenue: "+180%",
        retention: "+45%",
        conversion: "+92%"
      },
      link: "#",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Proyectos destacados que demuestran mi experiencia en desarrollo web. 
              Cada proyecto está optimizado para rendimiento, conversión y experiencia de usuario.
            </p>
          </div>
        </ScrollAnimation>

        {/* Filtros */}
        <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-background/50 border border-border text-foreground/70 hover:bg-background/70 hover:border-primary/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Proyectos Grid */}
        <ScrollAnimation delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-background/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                {/* Imagen del proyecto */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <p className="text-sm text-foreground/60">Imagen del proyecto</p>
                    </div>
                  </div>
                  
                  {/* Badge destacado */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Destacado
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tecnologías */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-foreground/60 uppercase tracking-wide mb-2">
                      Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resultados */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-foreground/60 uppercase tracking-wide mb-2">
                      Resultados
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-background/50 rounded-lg">
                          <p className="text-lg font-bold text-primary">{value}</p>
                          <p className="text-xs text-foreground/60 capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <div className="pt-4 border-t border-border/50">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Ver proyecto
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.article>
            ))}
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-16">
            <div className="bg-background/20 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                ¿Te gusta lo que ves?
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Cada proyecto es único y diseñado específicamente para las necesidades del cliente. 
                ¿Tienes una idea en mente? ¡Hablemos sobre tu proyecto!
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


