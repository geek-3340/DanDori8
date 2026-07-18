/**
 * アプリ共通シェル（現場一覧 / 工程ガント / 工程マスタ / 現場フォームを内包）
 * - 上部ナビ（PC）と下部ナビ（スマホ）は同じ画面遷移。表示はレスポンシブで切替。
 * - active 状態のスタイルは「現場一覧」を選択中の見た目で固定。状態管理側で付け替えてください。
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg font-['IBM_Plex_Sans_JP'] text-[#243040]">
      {/* ===== ヘッダー ===== */}
      <header className="relative flex h-18 flex-shrink-0 items-center gap-3.5 bg-app-primary px-[18px] text-white">
        {/* 上端の斜めストライプ */}
        <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_10px,#124272_10px_20px)]" />

        <div className="flex items-center gap-px">
          <img src="/logo.png" alt="" className="w-auto h-18" />
        </div>

        {/* PC 用グローバルナビ */}
        <nav className="ml-2 hidden items-center gap-4 md:flex">
          {/* active: border/opacity フル */}
          <button
            type="button"
            className="border-0 border-b-[3px] border-app-back bg-transparent px-1 py-[25px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white opacity-100"
          >
            現場一覧
          </button>
          {/* inactive: border 透明 + opacity 低 */}
          <button
            type="button"
            className="border-0 border-b-[3px] border-transparent bg-transparent px-1 py-[25px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white opacity-70"
          >
            工程マスタ
          </button>
        </nav>

        <div className="flex-1" />

        {/* ログアウト / ユーザー */}
        <button
          type="button"
          title="ログアウト"
          className="grid h-8 w-8 place-items-center rounded-full border-0 bg-app-secondary font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white"
        >
          佐
        </button>
      </header>

      {/* ===== メインコンテンツ ===== */}
      <main className="flex-1 p-4 md:p-7">{children}</main>

      {/* ===== スマホ用ボトムナビ ===== */}
      <nav className="flex flex-shrink-0 border-t border-[#D8E0E8] bg-white md:hidden">
        {/* active: #1A5A9C */}
        <button
          type="button"
          className="flex flex-1 flex-col items-center gap-1 border-0 bg-transparent px-1 pt-[11px] pb-[13px] font-['Zen_Kaku_Gothic_New'] text-[11px] font-bold text-app-primary"
        >
          <span className="h-3 w-5 rounded-[3px] border-[1.5px] border-app-primary bg-[repeating-linear-gradient(-45deg,#1A5A9C_0_4px,transparent_4px_8px)]" />
          現場
        </button>
        {/* inactive: #8494A5 */}
        <button
          type="button"
          className="flex flex-1 flex-col items-center gap-1 border-0 bg-transparent px-1 pt-[11px] pb-[13px] font-['Zen_Kaku_Gothic_New'] text-[11px] font-bold text-[#8494A5]"
        >
          <span className="h-3 w-5 rounded-[3px] bg-[#8494A5]" />
          工程マスタ
        </button>
      </nav>
    </div>
  );
}
