import type { ReactNode } from "react";
import { CHECKOUT_URL } from "@/lib/site-config";

export function CtaButton({
  children,
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  size?: "lg" | "xl";
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-glow inline-flex w-full items-center justify-center border border-crimson/70 bg-crimson/90 font-display tracking-[0.14em] text-primary-foreground uppercase hover:bg-crimson sm:w-auto ${
        size === "xl"
          ? "px-8 py-5 text-lg sm:px-14 sm:text-2xl"
          : "px-7 py-4 text-base sm:px-10 sm:text-lg"
      } ${className}`}
    >
      {children}
    </a>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 shrink-0 bg-crimson/70" />
      <span className="label-mono text-crimson/90">{children}</span>
    </div>
  );
}

export function RedRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-crimson/70 via-crimson/20 to-transparent ${className}`}
    />
  );
}

export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`label-mono pointer-events-none inline-block border-2 border-crimson/60 px-3 py-1 text-[0.6rem] text-crimson/80 ${className}`}
      style={{ animation: "stamp-in 1.4s ease-out both" }}
    >
      {children}
    </span>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <p className="label-mono border border-dashed border-border/80 bg-ink/40 px-3 py-2 leading-relaxed tracking-[0.14em] text-muted-foreground/80">
      {children}
    </p>
  );
}