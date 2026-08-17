import { Reveal } from "./Reveal";
import { CtaButton, Placeholder, RedRule, SectionLabel, Stamp } from "./primitives";
import { PRICE_LABEL } from "@/lib/site-config";
import finalDesk from "@/assets/final-desk.jpg";

const DOCUMENTS = [
  {
    id: "DOCUMENTO 001",
    title: "Casos e controvérsias",
    body: "Casos públicos relevantes envolvendo Lula e seus governos, sempre diferenciando claramente acusação, investigação, denúncia, condenação, decisão judicial, absolvição, arquivamento, anulação e situação atual.",
  },
  {
    id: "DOCUMENTO 002",
    title: "Decisões judiciais",
    body: "Decisões relevantes de tribunais e seus respectivos contextos, com identificação da instância e da situação jurídica.",
  },
  {
    id: "DOCUMENTO 003",
    title: "Operações e investigações",
    body: "Investigações e operações relacionadas ao período político analisado, com datas, documentos e desfechos.",
  },
  {
    id: "DOCUMENTO 004",
    title: "Declarações",
    body: "Declarações públicas relevantes, apresentadas com data, contexto e fonte original.",
  },
  {
    id: "DOCUMENTO 005",
    title: "Decisões e gastos",
    body: "Informações públicas relacionadas a decisões administrativas, políticas públicas, orçamento, gastos e indicadores oficiais.",
  },
  {
    id: "DOCUMENTO 006",
    title: "POR QUE LULA SEMPRE REPETE AS MESMAS PROMESSAS EM SEUS GOVERNOS?",
    body: "Décadas diferentes, discursos semelhantes. Promessas nunca cumpridas.",
  },
];

const TAGS = [
  { tag: "Comprovado", desc: "Informação respaldada por documento ou fonte primária." },
  { tag: "Alegação", desc: "Afirmação feita por determinada pessoa, órgão ou parte envolvida." },
  { tag: "Decisão judicial", desc: "Informação decorrente de decisão de tribunal." },
  {
    tag: "CONTEÚDOS EXCLUSIVOS",
    desc: "Conteúdos jamais visto na mídia brasileira.\nMedo?Cúmplices?",
  },
];

const DELIVERABLES = [
  { title: "POR QUE CALARAM BOLSONARO?", desc: "PDF otimizado para leitura em smartphone." },
  {
    title: "8 DE JANEIRO FOI REAL?",
    desc: "Dentro de nossos conteúdos,você vai saber o que de fato ocorreu e o motivo das prisões de inocentes.",
  },
  { title: "O QUE NUNCA FOI VISTO NAS MÍDIAS", desc: "Acontecimentos organizados que nunca foram falados." },
  {
    title: "POR QUE LULA GANHOU EM 2022?",
    desc: "Saiba do que realmente aconteceu in 2022, e o que realmente foi falado nas mídias.",
  },
  {
    title: "POR QUE O STF INTERFERE EM TODOS ACONTECIMENTOS NO BRASIL?",
    desc: "Saiba a verdade que nunca te contaram sobre o STF.",
  },
];

const METHOD = [
  { n: "01", title: "Pesquisa", desc: "Levantamento de documentos e fontes públicas." },
  { n: "02", title: "Verificação", desc: "Conferência das informações." },
  { n: "03", title: "Contextualização", desc: "Cada acontecimento recebe contexto." },
  { n: "04", title: "Documentação", desc: "Fontes são apresentadas ao leitor." },
];

function Shell({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`relative border-t border-border/50 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function MotiveSection() {
  return (
    <Shell id="motivo">
      <Reveal>
        <SectionLabel>Arquivo · nota de abertura</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-4xl font-bold text-paper sm:text-6xl">
          ESTE ARQUIVO EXISTE POR UM MOTIVO.<br />NÃO NOS CALAREMOS POR MAIS 4 ANOS!
        </h2>
      </Reveal>

      <Reveal delay={120} className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Durante anos, acontecimentos envolvendo a política brasileira foram registrados em
            decisões judiciais, documentos públicos, declarações, investigações, votações e
            reportagens espalhadas por diferentes fontes.
          </p>
          <p>
            Este arquivo reúne esses materiais em uma única experiência documental, permitindo que o
            leitor consulte os acontecimentos, conheça o contexto e verifique as fontes.
          </p>
        </div>
        <div className="hidden self-start lg:block">
          <Stamp>Arquivo · classificado</Stamp>
        </div>
      </Reveal>

      <Reveal delay={200} className="mt-14">
        <RedRule />
        <blockquote className="mt-8 font-display text-2xl leading-tight text-paper sm:text-4xl">
          Conteúdos EXCLUSIVOS jamais revelados na mídia. <span className="text-crimson">Consulte os documentos.</span>
        </blockquote>
        <RedRule className="mt-8" />
      </Reveal>
    </Shell>
  );
}

export function DocumentsSection() {
  return (
    <Shell id="documentos">
      <Reveal>
        <SectionLabel>Índice do dossiê</SectionLabel>
        <h2 className="mt-6 text-4xl font-bold text-paper sm:text-6xl">O que você vai encontrar</h2>
      </Reveal>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DOCUMENTS.map((doc, i) => (
          <Reveal as="li" key={doc.id} delay={i * 70}>
            <article className="dossier-card group flex h-full flex-col p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <span className="label-mono truncate text-crimson/80">{doc.id}</span>
                <span className="label-mono shrink-0 text-[0.55rem] text-muted-foreground/60">
                  Pág. 0{i + 1}
                </span>
              </div>
              <div className="mt-4 h-px w-full origin-left bg-crimson/40 transition-transform duration-700 group-hover:scale-x-100" />
              <h3 className="mt-5 text-2xl font-semibold text-paper">{doc.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{doc.body}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Shell>
  );
}

export function ClassificationSection() {
  return (
    <Shell id="classificacao" className="bg-graphite/25">
      <Reveal>
        <SectionLabel>Critério editorial</SectionLabel>
        <h2 className="mt-6 text-4xl font-bold text-paper sm:text-6xl">Fatos ou alegações?</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          O arquivo não mistura fatos comprovados com alegações. Cada informação recebe uma etiqueta
          de classificação visível ao leitor.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {TAGS.map((item, i) => (
          <Reveal as="li" key={item.tag} delay={i * 80}>
            <div className="dossier-card grid grid-cols-[minmax(0,1fr)] gap-4 p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
              <span className="label-mono w-fit border border-crimson/50 px-3 py-2 text-crimson/90">
                {item.tag}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={180} className="mt-12">
        <RedRule />
        <p className="mt-8 max-w-3xl font-display text-xl leading-snug text-paper sm:text-3xl">
          A diferença entre uma acusação e uma condenação importa. A diferença entre uma declaração e
          um fato também.
        </p>
      </Reveal>
    </Shell>
  );
}

export function EvidenceSection() {
  const slots = [0, 1, 2];
  return (
    <Shell id="evidencias">
      <Reveal>
        <SectionLabel>Mesa de trabalho</SectionLabel>
        <h2 className="mt-6 text-4xl font-bold text-paper sm:text-6xl">Arquivo de evidências</h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Cada evidência é apresentada em ficha própria, com data, evento, fonte, contexto e
          desfecho. As fichas abaixo são estruturas vazias: o conteúdo factual é inserido apenas com
          fonte pública verificável.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {slots.map((i) => (
          <Reveal key={i} delay={i * 90}>
            <article
              className="dossier-card h-full p-6"
              style={{ transform: `rotate(${i === 1 ? 0 : i === 0 ? -0.8 : 0.8}deg)` }}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <span className="label-mono truncate text-crimson/80">
                  Documento nº {String(i + 1).padStart(3, "0")}
                </span>
                <Stamp className="shrink-0">Vazio</Stamp>
              </div>
              <dl className="mt-6 space-y-4">
                {["Data", "Evento", "Fonte", "Contexto", "Desfecho"].map((field) => (
                  <div key={field}>
                    <dt className="label-mono text-[0.6rem] text-muted-foreground/70">{field}</dt>
                    <dd className="mt-2">
                      <Placeholder>[ a inserir · fonte pública ]</Placeholder>
                    </dd>
                  </div>
                ))}
              </dl>
              <span className="label-mono mt-6 inline-flex w-full items-center justify-center border border-border/80 px-4 py-3 text-muted-foreground/60">
                Ver fonte original
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function DeliverablesSection() {
  return (
    <Shell id="conteudo" className="bg-graphite/25">
      <Reveal>
        <SectionLabel>Entrega</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-4xl font-bold text-paper sm:text-6xl">
          O que você recebe ao acessar o arquivo
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DELIVERABLES.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 70}>
            <div className="dossier-card h-full p-6">
              <span className="label-mono text-crimson/70">
                Item {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Shell>
  );
}

export function PriceSection() {
  return (
    <Shell id="acesso">
      <div className="dossier-card relative overflow-hidden p-8 sm:p-14">
        <div className="grain-layer" />
        <Reveal className="relative">
          <SectionLabel>Checkout · documento 001</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold text-paper sm:text-6xl">Acesso ao arquivo</h2>
          <p className="label-mono mt-8">Pagamento único • acesso digital</p>
          <p className="mt-4 font-display text-6xl leading-none text-crimson sm:text-8xl">
            {PRICE_LABEL}
          </p>
          <div className="mt-10">
            <CtaButton size="xl">[ Acessar o dossiê por {PRICE_LABEL} ]</CtaButton>
          </div>
          <p className="label-mono mt-6 text-[0.6rem]">
            Acesso digital imediato · classificação: pública
          </p>
        </Reveal>
      </div>
    </Shell>
  );
}

export function MethodSection() {
  return (
    <Shell id="metodo" className="bg-graphite/25">
      <Reveal>
        <SectionLabel>Método</SectionLabel>
        <h2 className="mt-6 text-4xl font-bold text-paper sm:text-6xl">
          Como este arquivo é construído
        </h2>
      </Reveal>
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {METHOD.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 80}>
            <div className="dossier-card h-full p-6">
              <span className="font-display text-5xl text-crimson/60">{step.n}</span>
              <h3 className="mt-4 text-xl font-semibold text-paper">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={200} className="mt-12">
        <RedRule />
        <p className="mt-8 max-w-3xl font-display text-xl leading-snug text-paper sm:text-3xl">
          Você não precisa concordar com a análise. Você precisa ter acesso aos documentos.
        </p>
      </Reveal>
    </Shell>
  );
}

export function ClosingSection() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden border-t border-border/50">
      <img
        src={finalDesk}
        alt="Mesa de trabalho com documentos de arquivo sob luz baixa"
        width={1600}
        height={1008}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
      <div className="grain-layer -z-10" />

      <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8">
        <Reveal>
          <Stamp>Arquivo eleitoral 2026 · público</Stamp>
          <h2 className="mt-8 text-4xl leading-[0.95] font-bold text-paper sm:text-7xl">
            Antes de tomar uma decisão, <span className="text-crimson">conheça o arquivo.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            NÃO VOTE EM QUEM SEMPRE PROMETE E NUNCA CUMPRE.
          </p>
          <div className="mt-12">
            <CtaButton size="xl">[ Acessar o dossiê — {PRICE_LABEL} ]</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}