import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configuración del transporter de email
const transporter = nodemailer.createTransporter({
  service: "gmail", // Puedes cambiar a otro servicio como "outlook", "yahoo", etc.
  auth: {
    user: process.env.EMAIL_USER, // Tu email
    pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación
  },
});

// Función para formatear el presupuesto
function formatBudget(budget: string): string {
  const budgetMap: Record<string, string> = {
    small: "$1,000 - $3,000",
    medium: "$3,000 - $8,000",
    large: "$8,000 - $15,000",
    enterprise: "$15,000+",
  };
  return budgetMap[budget] || budget;
}

// Función para formatear el servicio
function formatService(service: string): string {
  const serviceMap: Record<string, string> = {
    landing: "Landing Page",
    corporate: "Sitio Corporativo",
    ecommerce: "E-commerce",
    maintenance: "Mantenimiento",
    other: "Otro",
  };
  return serviceMap[service] || service;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Validación básica
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Email donde recibirás los mensajes
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              🚀 Nuevo Mensaje de Contacto
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Información del Cliente</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
              ${phone ? `<p><strong>Teléfono:</strong> <a href="tel:${phone}" style="color: #007bff;">${phone}</a></p>` : ""}
              ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Detalles del Proyecto</h3>
              <p><strong>Servicio:</strong> ${formatService(service)}</p>
              <p><strong>Presupuesto:</strong> ${formatBudget(budget)}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Mensaje</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p>Este mensaje fue enviado desde tu sitio web freelancer</p>
              <p>Fecha: ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Email de confirmación al cliente (opcional)
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Gracias por contactarme - EmanuelPulido.dev",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">
              ¡Gracias por contactarme! 🎉
            </h2>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              Hola <strong>${name}</strong>,
            </p>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              He recibido tu mensaje y te responderé en las próximas 24 horas. 
              Mientras tanto, aquí tienes un resumen de lo que me contaste:
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
              <p><strong>Servicio:</strong> ${formatService(service)}</p>
              <p><strong>Presupuesto:</strong> ${formatBudget(budget)}</p>
              ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
            </div>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              Si tienes alguna pregunta urgente, no dudes en responder a este email.
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">
                Saludos,<br>
                <strong>Emanuel Pulido</strong><br>
                Desarrollador Web Freelancer
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Enviar email de confirmación
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Mensaje enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
