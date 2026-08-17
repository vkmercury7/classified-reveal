/**
 * Fundo dinâmico: grafite/preto com camadas muito sutis de documentos
 * desfocados, grade técnica, linha de scanner, poeira e ruído.
 * Puro CSS — sem bibliotecas e sem custo de runtime relevante.
 */

const FILE_CODES = [
  "N 0012478",
  "DOC 001 / 023",
  "REG 09.23.2026",
  "CLASS: PUBLICA",
  "ARQ 2026-B",
  "PAG 01/23",
  "SRC 0447",
  "REF 88-021",
];

export function ArchiveBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      {/* grade técnica em deriva lenta */}
      <div className="technical-grid absolute -inset-[20%] animate-drift opacity-60" />

      {/* manchas de documentos desfocados */}
      <div className="absolute inset-0 opacity-[0.35]">
        <div className="absolute top-[8%] left-[6%] h-72 w-56 rotate-[-7deg] bg-charcoal/50 blur-2xl" />
        <div className="absolute top-[42%] right-[8%] h-80 w-64 rotate-[6deg] bg-graphite/70 blur-3xl" />
        <div className="absolute bottom-[10%] left-[28%] h-64 w-72 rotate-[3deg] bg-charcoal/40 blur-3xl" />
      </div>

      {/* códigos de arquivo flutuando */}
      <div className="absolute inset-0 animate-drift">
        {FILE_CODES.map((code, i) => (
          <span
            key={code}
            className="label-mono absolute text-[0.55rem] whitespace-nowrap text-paper/[0.07]"
            style={{
              top: `${(i * 13 + 7) % 92}%`,
              left: `${(i * 29 + 11) % 88}%`,
              transform: `rotate(${i % 2 === 0 ? -90 : 0}deg)`,
            }}
          >
            {code}
          </span>
        ))}
      </div>

      {/* linhas vermelhas discretas */}
      <div className="absolute top-1/4 left-0 h-px w-full bg-crimson/[0.07]" />
      <div className="absolute top-2/3 left-0 h-px w-full bg-crimson/[0.05]" />
      <div className="absolute inset-y-0 left-[14%] w-px bg-crimson/[0.05]" />

      {/* scanner */}
      <div className="animate-scan absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-paper/[0.035] to-transparent" />

      {/* flashes de luz */}
      <div className="animate-flicker absolute top-[-10%] left-[55%] h-[60vh] w-[40vw] rotate-12 bg-gradient-to-b from-paper/10 to-transparent blur-3xl" />

      {/* vinheta + grain */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,oklch(0_0_0/0.85)_100%)]" />
      <div className="grain-layer animate-drift" />
    </div>
  );
}