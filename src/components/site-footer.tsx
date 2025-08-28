export function SiteFooter() {
  return (
    <footer className="py-8 text-sm text-center text-foreground/70">
      <div className="mx-auto max-w-5xl px-4">
        © {new Date().getFullYear()} EmanuelPulido.dev — Hecho con Next.js & Tailwind
      </div>
    </footer>
  );
}


