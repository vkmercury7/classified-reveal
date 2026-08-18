import { createFileRoute } from "@tanstack/react-router";
import { ArchiveBackground } from "@/components/archive/ArchiveBackground";
import { Hero } from "@/components/archive/Hero";
import { Footer } from "@/components/archive/Footer";
import { RevelationSection } from "@/components/archive/RevelationSection";
import {
  ClassificationSection,
  ClosingSection,
  DeliverablesSection,
  DocumentsSection,
  EvidenceSection,
  MethodSection,
  MotiveSection,
  PriceSection,
} from "@/components/archive/sections";

const TITLE = "LULA : A VERDADE POR TRÁS DE TUDO!";
const DESCRIPTION =
  "Dossiê digital com fatos, decisões judiciais, declarações e documentos de fontes públicas. Consulte, verifique as fontes e tire sua conclusão. R$ 18,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ArchiveBackground />
      <main className="relative z-10">
        <Hero />
        <MotiveSection />
        <DocumentsSection />
        <ClassificationSection />
        <EvidenceSection />
        <DeliverablesSection />
        <RevelationSection />
        <PriceSection />
        <MethodSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
