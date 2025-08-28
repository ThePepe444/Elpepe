export default function PortfolioPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
      <p className="text-foreground/80 max-w-2xl">
        Algunos proyectos destacados. Pronto agregaré estudios de caso con KPIs
        y resultados.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-lg border p-4">Proyecto A</article>
        <article className="rounded-lg border p-4">Proyecto B</article>
        <article className="rounded-lg border p-4">Proyecto C</article>
        <article className="rounded-lg border p-4">Proyecto D</article>
      </div>
    </section>
  );
}


