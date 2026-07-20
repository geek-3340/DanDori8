/**
 * アプリ共通シェル（現場一覧 / 工程ガント / 工程マスタ / 現場フォームを内包）
 * - 上部ナビ（PC）と下部ナビ（スマホ）は同じ画面遷移。表示はレスポンシブで切替。
 * - active 状態のスタイルは「現場一覧」を選択中の見た目で固定。状態管理側で付け替えてください。
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg font-['IBM_Plex_Sans_JP'] text-[#243040]">
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
