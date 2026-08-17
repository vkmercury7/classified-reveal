import { CtaButton } from "./primitives";
import { PRICE_LABEL } from "@/lib/site-config";
import heroAsset from "@/assets/hero-arquivo.png.asset.json";

export function Hero() {
  return (
    <header className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden">
      {/* A arte original já traz título e rodapé impressos; o recorte abaixo
          mantém apenas o retrato e o X vermelho para a composição editorial. */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Dossiê do arquivo eleitoral 2026 com marcação vermelha sobre retrato oficial"
          fetchPriority="high"
          decoding="async"
          className="absolute -top-[8%] left-1/2 h-[160%] w-auto max-w-none min-w-full -translate-x-1/2 object-cover opacity-70 sm:top-0 sm:left-0 sm:h-full sm:w-full sm:translate-x-0 sm:scale-[1.75] sm:opacity-85"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,oklch(0_0_0/0.85)_100%)]" />
      <div className="animate-scan absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-transparent via-crimson/[0.08] to-transparent" />
      <div className="grain-layer -z-10" />

      <div className="mx-auto w-full max-w-6xl px-5 pt-10 sm:px-8 sm:pt-14">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <span className="label-mono truncate text-crimson">Arquivo eleitoral 2026</span>
          <span className="label-mono hidden shrink-0 text-[0.6rem] sm:block">
            Classificação: pública
          </span>
        </div>
        <div className="mt-4 h-px w-full bg-crimson/40" />

        <h1 className="mt-8 text-[13vw] leading-[0.86] font-bold text-paper sm:mt-10 sm:text-[8.5vw] lg:text-[7rem]">
          LULA : A VERDADE
          <br />
          POR TRÁS DE TUDO!
        </h1>

        <div className="mt-6 h-px w-full bg-crimson/40" />
        <p className="label-mono mt-5 text-paper/70">
          FATOS · DECISÕES · DECLARAÇÕES · DOCUMENTOS&nbsp;· SIGILOS
        </p>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
        <dl className="grid gap-3 border-y border-border/60 py-5 sm:grid-cols-3">
          {[
            ["Documento", "Nº 001"],
            ["Arquivo", "2026"],
            ["Acesso", "Privado"],
          ].map(([k, v]) => (
            <div key={k} className="flex min-w-0 items-baseline gap-3">
              <dt className="label-mono shrink-0 text-[0.6rem]">{k}</dt>
              <dd className="truncate font-display text-lg text-paper">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <CtaButton>[ ACESSAR LIVRO DIGITAL ]</CtaButton>
          <div className="sm:text-right">
            <p className="font-display text-4xl leading-none text-crimson sm:text-5xl">
              {PRICE_LABEL}
            </p>
            <p className="label-mono mt-2 text-[0.6rem]">Acesso digital imediato</p>
          </div>
        </div>
      </div>
    </header>
  );
}