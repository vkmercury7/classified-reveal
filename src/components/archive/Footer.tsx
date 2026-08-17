import { SITE_NAME } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-ink py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-display text-lg leading-tight text-paper sm:text-2xl">{SITE_NAME}</p>
        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {["Termos de Uso", "Política de Privacidade", "Contato", "Fontes"].map((link) => (
            <a
              key={link}
              href="#"
              className="label-mono transition-colors hover:text-crimson"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="mt-10 h-px w-full bg-crimson/25" />
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground/80">
          Este material apresenta informações, documentos e análises de fontes públicas. Alegações,
          decisões judiciais, condenações, anulações e demais acontecimentos devem ser interpretados
          conforme seu contexto e situação jurídica.
        </p>
        <p className="label-mono mt-8 text-[0.6rem] text-muted-foreground/60">
          Documento nº 001 — Arquivo: 2026 — Classificação: pública
        </p>
      </div>
    </footer>
  );
}