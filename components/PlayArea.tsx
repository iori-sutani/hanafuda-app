"use client";

import React from "react";
import { useGameStore, Card } from "../lib/store";

export default function PlayArea() {
  // Use individual selectors to avoid creating a new object each render
  const playerHand = useGameStore((s) => s.playerHand);
  const field = useGameStore((s) => s.field);
  const deck = useGameStore((s) => s.deck);
  const playerScore = useGameStore((s) => s.playerScore);
  const cpuScore = useGameStore((s) => s.cpuScore);
  const initGame = useGameStore((s) => s.initGame);
  const playCard = useGameStore((s) => s.playCard);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-amber-50 px-3 py-2 shadow">Player: {playerScore}</div>
          <div className="rounded-lg bg-amber-50 px-3 py-2 shadow">CPU: {cpuScore}</div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => initGame()}
            className="rounded-full bg-rose-500 px-4 py-2 text-white shadow hover:bg-rose-600"
          >
            New Game
          </button>
          <div className="rounded-lg bg-white/60 px-3 py-2 text-sm">Deck: {deck.length}</div>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="mb-2 text-sm font-medium text-rose-600">場札</h2>
        <div className="flex gap-2">
          {field.length === 0 && <div className="text-sm text-zinc-500">No cards</div>}
          {field.map((c: Card) => (
            <div
              key={c.id}
              className="w-20 rounded-md border border-zinc-200 bg-white p-2 text-center shadow-sm"
            >
              <div className="text-xs text-zinc-400">{c.month}月</div>
              <div className="mt-1 text-sm font-medium">{c.type}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-medium text-rose-600">手札（クリックで出す）</h2>
        <div className="flex gap-2">
          {playerHand.length === 0 && <div className="text-sm text-zinc-500">手札がありません</div>}
          {playerHand.map((c: Card) => (
            <button
              key={c.id}
              onClick={() => playCard(c.id)}
              className="w-20 rounded-md border border-zinc-200 bg-white p-2 text-center shadow-md hover:scale-105 active:scale-95"
            >
              <div className="text-xs text-zinc-400">{c.month}月</div>
              <div className="mt-1 text-sm font-medium">{c.type}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
