/**
 * 現場一覧（AppShell の <main> 内に表示するコンテンツ）
 * 例）<AppShell><SitesIndex /></AppShell>
 *
 * カードは sites を .map() で展開してください。ここではサンプル3件を静的に配置。
 */
export default function SitesIndex() {
  return (
    <div>
      {/* 見出し行 */}
      <div className="mb-[18px] flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h3 className="m-0 font-['Zen_Kaku_Gothic_New'] text-[21px] font-black text-[#124272]">現場一覧</h3>
          <span className="font-['IBM_Plex_Mono'] text-[11.5px] text-[#5B6B7E]">
            3 現場 ・ タップで工程ガントへ
          </span>
        </div>
        <button
          type="button"
          className="rounded-[9px] border-0 bg-[#23A9C6] px-4 py-2.5 font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(35,169,198,.25)]"
        >
          ＋ 新規現場
        </button>
      </div>

      {/* カードグリッド（PC 3列 / タブレット 2列 / スマホ 1列） */}
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
        {/* ↓ 1件分。sites.map((s) => ( ... )) で繰り返し */}
        <div className="flex cursor-pointer flex-col gap-3 rounded-[14px] border border-[#D8E0E8] bg-white px-[18px] py-4 shadow-[0_2px_8px_rgba(18,66,114,.05)] hover:border-[#23A9C6] hover:shadow-[0_8px_22px_rgba(18,66,114,.12)]">
          <div className="flex items-start justify-between gap-2.5">
            <div>
              <div className="font-['Zen_Kaku_Gothic_New'] text-base font-black leading-[1.4] text-[#124272]">
                国道8号 舗装補修工
              </div>
              <div className="mt-1 font-['IBM_Plex_Mono'] text-[11px] text-[#5B6B7E]">
                2026/06/01 〜 2026/08/28
              </div>
            </div>
            <span className="flex-shrink-0 rounded-[7px] border border-[#D8E0E8] px-2 py-0.5 font-['IBM_Plex_Mono'] text-[11px] text-[#1A5A9C] hover:bg-[#EFF3F7]">
              編集
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[11px] w-5 flex-shrink-0 rounded-[3px] bg-[linear-gradient(180deg,#3D4855,#2E3742)]" />
            <span className="text-[11.5px] text-[#5B6B7E]">
              進行中: <b className="text-[#243040]">路盤工</b>
            </span>
          </div>
        </div>

        {/* サンプル2件目 */}
        <div className="flex cursor-pointer flex-col gap-3 rounded-[14px] border border-[#D8E0E8] bg-white px-[18px] py-4 shadow-[0_2px_8px_rgba(18,66,114,.05)] hover:border-[#23A9C6] hover:shadow-[0_8px_22px_rgba(18,66,114,.12)]">
          <div className="flex items-start justify-between gap-2.5">
            <div>
              <div className="font-['Zen_Kaku_Gothic_New'] text-base font-black leading-[1.4] text-[#124272]">
                市道42号 側溝改良工
              </div>
              <div className="mt-1 font-['IBM_Plex_Mono'] text-[11px] text-[#5B6B7E]">
                2026/06/25 〜 2026/08/20
              </div>
            </div>
            <span className="flex-shrink-0 rounded-[7px] border border-[#D8E0E8] px-2 py-0.5 font-['IBM_Plex_Mono'] text-[11px] text-[#1A5A9C] hover:bg-[#EFF3F7]">
              編集
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[11px] w-5 flex-shrink-0 rounded-[3px] bg-[linear-gradient(180deg,#3D4855,#2E3742)]" />
            <span className="text-[11.5px] text-[#5B6B7E]">
              進行中: <b className="text-[#243040]">掘削工</b>
            </span>
          </div>
        </div>

        {/* サンプル3件目 */}
        <div className="flex cursor-pointer flex-col gap-3 rounded-[14px] border border-[#D8E0E8] bg-white px-[18px] py-4 shadow-[0_2px_8px_rgba(18,66,114,.05)] hover:border-[#23A9C6] hover:shadow-[0_8px_22px_rgba(18,66,114,.12)]">
          <div className="flex items-start justify-between gap-2.5">
            <div>
              <div className="font-['Zen_Kaku_Gothic_New'] text-base font-black leading-[1.4] text-[#124272]">
                県道7号 区画線設置
              </div>
              <div className="mt-1 font-['IBM_Plex_Mono'] text-[11px] text-[#5B6B7E]">
                2026/06/20 〜 2026/07/24
              </div>
            </div>
            <span className="flex-shrink-0 rounded-[7px] border border-[#D8E0E8] px-2 py-0.5 font-['IBM_Plex_Mono'] text-[11px] text-[#1A5A9C] hover:bg-[#EFF3F7]">
              編集
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[11px] w-5 flex-shrink-0 rounded-[3px] bg-[linear-gradient(180deg,#3D4855,#2E3742)]" />
            <span className="text-[11.5px] text-[#5B6B7E]">
              進行中: <b className="text-[#243040]">区画線工</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
