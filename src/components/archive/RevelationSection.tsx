import { Reveal } from "./Reveal";
import { Stamp } from "./primitives";

const CODES = ["ARQ-006/26", "REF 0x8821", "SEC-004", "LOG 22:41", "CLS-A2", "FL-119"];

export function RevelationSection() {
  return (
    <section
      id="revelacao"
      className="relative overflow-hidden border-t border-border/50 bg-ink py-24 sm:py-36"
    >
      {/* fundo: documentos desfocados */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="technical-grid absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        <div className="absolute -left-16 top-10 h-64 w-52 rotate-[-8deg] border border-border/60 bg-graphite/40 blur-[3px] sm:h-80 sm:w-64" />
        <div className="absolute -right-10 bottom-8 h-72 w-56 rotate-[6deg] border border-border/50 bg-graphite/30 blur-[4px] sm:h-96 sm:w-72" />
        <div className="absolute left-1/2 top-1/2 h-[80%] w-[86%] max-w-4xl -translate-x-1/2 -translate-y-1/2 border border-border/40 bg-charcoal/10 blur-[1px]" />
        {/* faixa de scanner */}
        <div
          className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-crimson/12 to-transparent"
          style={{ animation: "revelation-scan 11s linear infinite" }}
        />
        {/* flashes vermelhos discretos */}
        <div
          className="absolute left-[12%] top-[24%] h-1.5 w-1.5 rounded-full bg-crimson"
          style={{ animation: "revelation-flash 6s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[16%] top-[62%] h-1 w-1 rounded-full bg-crimson"
          style={{ animation: "revelation-flash 8s ease-in-out 2s infinite" }}
        />
        <div
          className="absolute left-[42%] bottom-[14%] h-1 w-1 rounded-full bg-crimson/80"
          style={{ animation: "revelation-flash 9s ease-in-out 4s infinite" }}
        />
        <div className="grain-layer" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        {/* identificação técnica */}
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="label-mono text-crimson/90">Documento nº 006</p>
              <p className="label-mono mt-3 text-[0.6rem] text-muted-foreground/80">
                Classificação: confidencial
              </p>
            </div>
            <Stamp className="text-[0.7rem] sm:text-sm">Confidencial</Stamp>
          </div>
        </Reveal>

        {/* frase principal */}
        <Reveal delay={120}>
          <h2 className="mt-14 font-display text-[2.35rem] font-bold leading-[0.94] text-paper sm:mt-20 sm:text-7xl lg:text-8xl">
            E aí,
            <br />
            dá pra acreditar
            <br />
            <span className="text-crimson">em falsas promessas</span>
            <br />
            de novo?
          </h2>
        </Reveal>

        {/* tarjas censuradas */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="h-4 w-24 bg-ink/90 ring-1 ring-border/60 sm:w-36" />
            <span className="h-4 w-16 bg-ink/90 ring-1 ring-border/60 sm:w-24" />
            <span className="label-mono text-[0.55rem] text-muted-foreground/60">
              {CODES.slice(0, 3).join(" · ")}
            </span>
            <span className="h-4 w-20 bg-ink/90 ring-1 ring-border/60 sm:w-32" />
          </div>
        </Reveal>

        {/* texto secundário */}
        <Reveal delay={260}>
          <p className="label-mono mt-10 max-w-2xl leading-loose tracking-[0.22em] text-muted-foreground/85">
            Consulte os documentos. Conheça os fatos. Tire sua própria conclusão.
          </p>
        </Reveal>

        {/* transição */}
        <Reveal delay={320}>
          <div className="mt-16 sm:mt-20">
            <div className="h-px w-full bg-gradient-to-r from-crimson via-crimson/40 to-transparent" />
            <p className="label-mono mt-5 text-[0.6rem] text-paper/70">
              Arquivo aberto • acesso imediato
            </p>
            <p className="label-mono mt-3 text-[0.5rem] text-muted-foreground/50">
              {CODES.slice(3).join(" · ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
