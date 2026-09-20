import React from "react";

export function DesktopWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-[#FAF8F5] py-0 px-0">
      {/* Seamless centered container blending with desktop background */}
      <main className="w-full max-w-[480px] min-h-screen bg-[#FAF8F5] text-[#2C2825] overflow-x-hidden relative">
        {children}
      </main>
    </div>
  );
}
