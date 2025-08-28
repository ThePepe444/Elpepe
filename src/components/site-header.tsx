import Link from "next/link";

export function SiteHeader() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "/contacto";
  const isExternal = /^https?:\/\//i.test(calendlyUrl);
  return (
    <header className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          EmanuelPulido.dev
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/servicios" className="hover:underline underline-offset-4">
            Servicios
          </Link>
          <Link href="/portfolio" className="hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link href="/sobre-mi" className="hover:underline underline-offset-4">
            Sobre mí
          </Link>
          <Link href="/contacto" className="hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>
        {isExternal ? (
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-foreground text-background px-3 py-2 text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Agenda una llamada
          </a>
        ) : (
          <Link
            href={calendlyUrl}
            className="inline-flex items-center rounded-md bg-foreground text-background px-3 py-2 text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Agenda una llamada
          </Link>
        )}
      </div>
    </header>
  );
}


