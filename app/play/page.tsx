"use client";

import GameLayout from "../../components/GameLayout";
import GameHeader from "../../components/GameHeader";
import PlayArea from "../../components/PlayArea";

export default function PlayPage() {
  return (
    <GameLayout>
      <GameHeader />
      <main>
        <PlayArea />
      </main>
    </GameLayout>
  );
}
