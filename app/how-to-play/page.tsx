import Link from "next/link";

export default function HowToPlay() {
  return (
    <div className="prose mx-auto max-w-2xl py-12">
      <h1>遊び方（簡易）</h1>
      <p>このアプリは花札をマンガのように分かりやすく案内するライト向けモードを意識しています。</p>
      <h2>基本</h2>
      <ul>
        <li>12ヶ月 × 各4枚 = 48枚</li>
        <li>同じ月の札を合わせて取ることが目的</li>
        <li>取った札の組み合わせで役ができ、点数になります</li>
      </ul>
      <h2>1ターンの流れ</h2>
      <ol>
        <li>手札から1枚出す</li>
        <li>場札と合わせて取る（同じ月があれば取れる）</li>
        <li>山札をめくる</li>
      </ol>
      <p>
        まずは <Link href="/play">対戦画面</Link> で遊んでみましょう。アシストは画面右上から切り替えできます。
      </p>
    </div>
  );
}
