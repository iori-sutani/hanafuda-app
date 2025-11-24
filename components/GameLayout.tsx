"use client";

import React from "react";

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-yellow-50 p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
