export default function ServiciosPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Servicios</h1>
      <p className="text-foreground/80 max-w-2xl">
        Desarrollo de sitios web rápidos, accesibles y orientados a conversión:
        landing pages, sitios corporativos y tiendas online.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        <li className="rounded-lg border p-4">Landing page optimizada</li>
        <li className="rounded-lg border p-4">Sitio corporativo</li>
        <li className="rounded-lg border p-4">E-commerce (headless)</li>
        <li className="rounded-lg border p-4">Mantenimiento y mejoras</li>
      </ul>
    </section>
  );
}


