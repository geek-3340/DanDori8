/**
 * 現場の作成 / 編集フォーム（AppShell の <main> 内に表示）
 * 例）<AppShell><SiteForm /></AppShell>
 *
 * - タイトル・ボタンラベルは新規/編集で切替（新規: 「現場を作成」/ 編集: 「更新する」）。
 * - マスタ選択肢(option) と 追加済み工程(draftItems) は .map() で展開してください。
 * - 追加済み工程が 0 件のときは「空状態」ブロックを表示します（両方を掲載）。
 */
export default function SiteForm() {
  return (
    <div className="max-w-[680px]">
      <a className="mb-2.5 inline-block cursor-pointer font-['IBM_Plex_Mono'] text-xs">← 現場一覧</a>
      <h3 className="m-0 mb-[18px] font-['Zen_Kaku_Gothic_New'] text-[21px] font-black text-[#124272]">
        {/* 新規現場 / 現場を編集 */}
        新規現場
      </h3>

      <div className="grid gap-5 rounded-[14px] border border-[#D8E0E8] bg-white p-[22px]">
        {/* 現場名 */}
        <label className="grid gap-1.5">
          <span className="font-['Zen_Kaku_Gothic_New'] text-[12.5px] font-bold text-[#243040]">現場名</span>
          <input
            placeholder="例：国道8号 舗装補修工"
            className="rounded-[9px] border border-[#D8E0E8] bg-[#FBFDFE] px-[13px] py-[11px] font-['IBM_Plex_Sans_JP'] text-sm focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
          />
        </label>

        {/* 工程を登録 */}
        <div className="grid gap-2.5">
          <span className="font-['Zen_Kaku_Gothic_New'] text-[12.5px] font-bold text-[#243040]">
            工程を登録{' '}
            <span className="font-['IBM_Plex_Mono'] text-[11px] font-normal text-[#5B6B7E]">
              （工程名＋期間 → 追加）
            </span>
          </span>

          <div className="grid gap-3 rounded-[11px] border border-[#E3EAF1] bg-[#F7FAFC] p-3.5">
            {/* マスタ選択 or 直接入力 */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                className="min-w-[150px] flex-1 rounded-[9px] border border-[#D8E0E8] bg-white px-3 py-2.5 font-['IBM_Plex_Sans_JP'] text-[13.5px] text-[#243040] focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
                defaultValue=""
              >
                <option value="">マスタから工程を選択</option>
                {/* masterOptions.map((o) => <option key={o.name} value={o.name}>{o.name}</option>) */}
                <option value="準備工">準備工</option>
                <option value="路盤工">路盤工</option>
                <option value="舗装工">舗装工</option>
              </select>
              <span className="font-['IBM_Plex_Mono'] text-[11px] text-[#8494A5]">または</span>
              <input
                placeholder="直接入力"
                className="min-w-[130px] flex-1 rounded-[9px] border border-[#D8E0E8] bg-white px-3 py-2.5 font-['IBM_Plex_Sans_JP'] text-[13.5px] focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
              />
            </div>

            {/* 開始日 〜 終了日 */}
            <div className="flex flex-wrap items-center gap-2">
              <label className="flex min-w-[130px] flex-1 flex-col gap-[3px]">
                <span className="font-['IBM_Plex_Mono'] text-[10.5px] text-[#5B6B7E]">開始日</span>
                <input
                  type="date"
                  className="rounded-[9px] border border-[#D8E0E8] bg-white px-[11px] py-[9px] font-['IBM_Plex_Mono'] text-[13px] text-[#243040] focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
                />
              </label>
              <span className="self-end pb-2.5 text-[#8494A5]">〜</span>
              <label className="flex min-w-[130px] flex-1 flex-col gap-[3px]">
                <span className="font-['IBM_Plex_Mono'] text-[10.5px] text-[#5B6B7E]">終了日</span>
                <input
                  type="date"
                  className="rounded-[9px] border border-[#D8E0E8] bg-white px-[11px] py-[9px] font-['IBM_Plex_Mono'] text-[13px] text-[#243040] focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
                />
              </label>
              <button
                type="button"
                className="self-end rounded-[9px] border-0 bg-[#1A5A9C] px-4 py-2.5 font-['Zen_Kaku_Gothic_New'] text-[12.5px] font-bold text-white"
              >
                ＋ 追加
              </button>
            </div>
          </div>

          {/* 追加済み工程あり: draftItems.map((it) => ( ... )) */}
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2.5 rounded-[9px] border border-[#D8E0E8] bg-white px-[13px] py-[9px]">
              <span className="h-2.5 w-[18px] flex-shrink-0 rounded-[3px] bg-[linear-gradient(180deg,#3D4855,#2E3742)]" />
              <span className="flex-1 font-['Zen_Kaku_Gothic_New'] text-[13.5px] font-bold text-[#243040]">準備工</span>
              <span className="font-['IBM_Plex_Mono'] text-[11.5px] text-[#5B6B7E]">2026/06/01 〜 2026/06/18</span>
              <span title="削除" className="flex-shrink-0 cursor-pointer text-[15px] text-[#B8C4D0] hover:text-[#F08519]">
                ×
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-[9px] border border-[#D8E0E8] bg-white px-[13px] py-[9px]">
              <span className="h-2.5 w-[18px] flex-shrink-0 rounded-[3px] bg-[linear-gradient(180deg,#3D4855,#2E3742)]" />
              <span className="flex-1 font-['Zen_Kaku_Gothic_New'] text-[13.5px] font-bold text-[#243040]">路盤工</span>
              <span className="font-['IBM_Plex_Mono'] text-[11.5px] text-[#5B6B7E]">2026/06/22 〜 2026/07/18</span>
              <span title="削除" className="flex-shrink-0 cursor-pointer text-[15px] text-[#B8C4D0] hover:text-[#F08519]">
                ×
              </span>
            </div>
          </div>

          {/* 追加済み工程なし: 空状態（0件のときのみ表示） */}
          <div className="rounded-[9px] border-[1.5px] border-dashed border-[#D8E0E8] p-3.5 text-center text-[12.5px] text-[#8494A5]">
            まだ工程がありません。上のフォームから追加してください。
          </div>
        </div>

        {/* アクション */}
        <div className="mt-0.5 flex justify-end gap-2.5">
          <button
            type="button"
            className="rounded-[9px] border border-[#D8E0E8] bg-white px-5 py-[11px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-[#5B6B7E]"
          >
            キャンセル
          </button>
          <button
            type="button"
            className="rounded-[9px] border-0 bg-[#23A9C6] px-6 py-[11px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(35,169,198,.25)]"
          >
            {/* 現場を作成 / 更新する */}
            現場を作成
          </button>
        </div>
      </div>
    </div>
  );
}
