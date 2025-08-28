"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(["landing", "corporate", "ecommerce", "maintenance", "other"], {
    required_error: "Selecciona un servicio",
  }),
  budget: z.enum(["small", "medium", "large", "enterprise"], {
    required_error: "Selecciona un presupuesto",
  }),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: "landing", label: "Landing Page" },
    { value: "corporate", label: "Sitio Corporativo" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "maintenance", label: "Mantenimiento" },
    { value: "other", label: "Otro" },
  ];

  const budgetOptions = [
    { value: "small", label: "$1,000 - $3,000" },
    { value: "medium", label: "$3,000 - $8,000" },
    { value: "large", label: "$8,000 - $15,000" },
    { value: "enterprise", label: "$15,000+" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Nombre y Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Nombre completo *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className={`w-full px-4 py-3 rounded-lg border bg-background/50 backdrop-blur-sm transition-all duration-200 ${
                errors.name
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-border focus:border-primary focus:ring-primary"
              }`}
              placeholder="Tu nombre"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.name.message}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className={`w-full px-4 py-3 rounded-lg border bg-background/50 backdrop-blur-sm transition-all duration-200 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-border focus:border-primary focus:ring-primary"
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.email.message}
              </motion.p>
            )}
          </div>
        </div>

        {/* Teléfono y Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Teléfono
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-primary transition-all duration-200"
              placeholder="+54 9 11 1234-5678"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Empresa
            </label>
            <input
              {...register("company")}
              type="text"
              id="company"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-primary transition-all duration-200"
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        {/* Servicio y Presupuesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
              Servicio que necesitas *
            </label>
            <select
              {...register("service")}
              id="service"
              className={`w-full px-4 py-3 rounded-lg border bg-background/50 backdrop-blur-sm transition-all duration-200 ${
                errors.service
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-border focus:border-primary focus:ring-primary"
              }`}
            >
              <option value="">Selecciona un servicio</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.service.message}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
              Presupuesto estimado *
            </label>
            <select
              {...register("budget")}
              id="budget"
              className={`w-full px-4 py-3 rounded-lg border bg-background/50 backdrop-blur-sm transition-all duration-200 ${
                errors.budget
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-border focus:border-primary focus:ring-primary"
              }`}
            >
              <option value="">Selecciona un presupuesto</option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.budget && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.budget.message}
              </motion.p>
            )}
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Cuéntame sobre tu proyecto *
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border bg-background/50 backdrop-blur-sm transition-all duration-200 resize-none ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-border focus:border-primary focus:ring-primary"
            }`}
            placeholder="Describe tu proyecto, objetivos, timeline y cualquier detalle importante..."
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.message.message}
            </motion.p>
          )}
        </div>

        {/* Botón de envío */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105"
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando mensaje...
            </div>
          ) : (
            "Enviar mensaje"
          )}
        </motion.button>

        {/* Mensajes de estado */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
          >
            <p className="text-green-500 text-center">
              ¡Mensaje enviado exitosamente! Te responderé en las próximas 24 horas.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <p className="text-red-500 text-center">
              Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.
            </p>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}
