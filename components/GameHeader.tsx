"use client";

import React from "react";
import { useGameStore } from "../lib/store";

export default function GameHeader() {
  const assist = useGameStore((s) => s.assist);
  const toggleAssist = useGameStore((s) => s.toggleAssist);
  return (
    <header className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-rose-700">花札ライト — Play</h1>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-sm">
          <input
            type="checkbox"
            checked={assist}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // prevent implicit any on event param — call store toggle
              toggleAssist();
            }}
          />
          <span>アシスト</span>
        </label>
      </div>
    </header>
  );
}
