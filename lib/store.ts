"use client";

import { create } from "zustand";

export type CardType = "hikari" | "tane" | "tanzaku" | "kasu";

export type Card = {
  id: number;
  month: number; // 1-12
  type: CardType;
  label?: string;
};

type GameState = {
  deck: Card[];
  playerHand: Card[];
  cpuHand: Card[];
  field: Card[];
  discard: Card[];
  playerScore: number;
  cpuScore: number;
  turn: "player" | "cpu";
  assist: boolean;
  initGame: () => void;
  playCard: (cardId: number) => void;
  toggleAssist: () => void;
};

const makeDeck = (): Card[] => {
  const types: CardType[] = ["kasu", "tanzaku", "tane", "hikari"];
  const cards: Card[] = [];
  let id = 1;
  for (let month = 1; month <= 12; month++) {
    for (let i = 0; i < 4; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      cards.push({ id: id++, month, type, label: `${month}-${i + 1}` });
    }
  }
  return cards;
};

const shuffle = (a: Card[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const useGameStore = create<GameState>((set, get) => ({
  deck: [],
  playerHand: [],
  cpuHand: [],
  field: [],
  discard: [],
  playerScore: 0,
  cpuScore: 0,
  turn: "player",
  assist: true,
  initGame() {
    const deck = shuffle(makeDeck());
    const playerHand = deck.splice(0, 8);
    const cpuHand = deck.splice(0, 8);
    const field = deck.splice(0, 8);
    set({ deck, playerHand, cpuHand, field, discard: [], playerScore: 0, cpuScore: 0, turn: "player" });
  },
  playCard(cardId: number) {
    const { playerHand, field } = get();
    const card = playerHand.find((c) => c.id === cardId);
    if (!card) return;
    const newPlayerHand = playerHand.filter((c) => c.id !== cardId);
    const newField = [...field, card];
    set({ playerHand: newPlayerHand, field: newField, turn: "cpu" });
  },
  toggleAssist() {
    set((s) => ({ assist: !s.assist }));
  },
}));
