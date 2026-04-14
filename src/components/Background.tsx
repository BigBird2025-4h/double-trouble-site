"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-20 bg-black">
      
      {/* GRID (more visible) */}
      <div className="absolute inset-0 
        bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(to_right,#222_1px,transparent_1px)] 
        bg-[size:40px_40px] opacity-40" 
      />

      {/* RED GLOW */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/30 blur-[140px]" />

      {/* BLUE GLOW */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/30 blur-[140px]" />

    </div>
  );
}