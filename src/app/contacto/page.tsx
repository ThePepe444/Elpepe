"use client";

import ContactForm from "@/components/contact-form";
import ScrollAnimation from "@/components/scroll-animation";

export default function ContactoPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Hablemos de tu proyecto
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              ¿Tienes una idea en mente? ¡Cuéntame sobre tu proyecto y juntos haremos que suceda!
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
              <p className="text-foreground/70">hola@emanuelpulido.dev</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Respuesta</h3>
              <p className="text-foreground/70">En 24 horas</p>
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

        {/* Formulario */}
        <ScrollAnimation delay={0.4}>
          <div className="bg-background/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Cuéntame sobre tu proyecto
              </h2>
              <p className="text-foreground/70 max-w-lg mx-auto">
                Completa el formulario y te responderé con una propuesta personalizada para tu proyecto.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </ScrollAnimation>

        {/* Información adicional */}
        <ScrollAnimation delay={0.6}>
          <div className="mt-16 text-center">
            <div className="bg-background/20 backdrop-blur-sm border border-border rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-3">¿Prefieres agendar una llamada?</h3>
              <p className="text-foreground/70 mb-4">
                También puedes agendar una reunión directamente en mi calendario para hablar sobre tu proyecto.
              </p>
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agendar llamada
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}


