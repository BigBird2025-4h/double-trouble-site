"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-cream">
      <div className="absolute inset-0 grain-overlay" />

      <div className="absolute -top-10 -left-10 w-[420px] h-[420px] halftone text-charcoal opacity-[0.07]" />

      <div className="absolute -bottom-10 -right-10 w-[420px] h-[420px] halftone text-charcoal opacity-[0.07]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(34,34,34,0.06) 100%)",
        }}
      />
    </div>
  );
}
