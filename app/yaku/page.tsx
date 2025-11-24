export default function YakuPage() {
  return (
    <div className="prose mx-auto max-w-2xl py-12">
      <h1>役図鑑（サンプル）</h1>
      <p>まずは代表的な役のみ載せています。詳細はプレイ中に出た役から参照可能にします。</p>
      <ul>
        <li>
          <strong>カス</strong>：点数の低い札をたくさん集める役（例）
        </li>
        <li>
          <strong>タネ</strong>：タネ札を集めると得点になる（例）
        </li>
        <li>
          <strong>光</strong>：光札を集める強めの役（例）
        </li>
      </ul>
    </div>
  );
}
