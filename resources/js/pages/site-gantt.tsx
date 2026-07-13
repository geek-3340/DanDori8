/**
 * 現場ごとの工程ガント（AppShell の <main> 内に表示）
 * 例）<AppShell><SiteGantt /></AppShell>
 *
 * ポイント:
 * - 日付ヘッダー(days) と 工程バー(bars) は日付から算出して .map() で展開してください。
 *   ここでは構造が分かるようサンプルを静的配置しています。
 * - バーの left / width、today線の left は「開始日・終了日から算出した値」を
 *   style={{ left, width }} で渡す想定です（下記は例）。
 * - バーは done(完了) / active(進行中) / plan(予定) の3状態。3ブロックを見比べてください。
 */
export default function SiteGantt() {
  return (
    <div>
      <a className="mb-2.5 inline-block cursor-pointer font-['IBM_Plex_Mono'] text-xs">← 現場一覧</a>

      {/* 見出し */}
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h3 className="m-0 font-['Zen_Kaku_Gothic_New'] text-[21px] font-black text-[#124272]">国道8号 舗装補修工</h3>
          <span className="font-['IBM_Plex_Mono'] text-xs text-[#5B6B7E]">2026/06/01 〜 2026/08/28</span>
        </div>
        <button
          type="button"
          className="rounded-[9px] border-0 bg-[#23A9C6] px-4 py-2.5 font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(35,169,198,.25)]"
        >
          ＋ 工程を追加
        </button>
      </div>

      {/* ガント本体（横スクロール） */}
      <div className="overflow-x-auto rounded-[12px] border border-[#D8E0E8] bg-white">
        <div className="w-max min-w-full">
          {/* ---- 日付ヘッダー ---- */}
          <div className="flex border-b border-[#D8E0E8] bg-[#F4F8FB]">
            <div className="sticky left-0 z-[3] flex max-w-[140px] min-w-[140px] items-end border-r-2 border-[#D8E0E8] bg-[#F4F8FB] px-3 py-[9px] font-['Zen_Kaku_Gothic_New'] text-xs font-bold text-[#124272]">
              工程
            </div>
            <div className="flex">
              {/* ↓ days.map((d) => ( ... )) 。月初は border-left + 太字で強調 */}
              {/* 月初セル（例: 6/1） */}
              <div className="w-7 flex-[0_0_28px] border-r border-l-2 border-r-[#EAEFF4] border-l-[#124272] bg-white px-0 pt-2 pb-[7px] text-center font-['IBM_Plex_Mono'] text-[9.5px] font-bold text-[#124272]">
                6/1
              </div>
              {/* 通常セル（例） */}
              <div className="w-7 flex-[0_0_28px] border-r border-r-[#EAEFF4] px-0 pt-2 pb-[7px] text-center font-['IBM_Plex_Mono'] text-[9.5px] font-normal text-[#5B6B7E]">
                5
              </div>
              <div className="w-7 flex-[0_0_28px] border-r border-r-[#EAEFF4] px-0 pt-2 pb-[7px] text-center font-['IBM_Plex_Mono'] text-[9.5px] font-normal text-[#5B6B7E]">
                9
              </div>
              <div className="w-7 flex-[0_0_28px] border-r border-r-[#EAEFF4] px-0 pt-2 pb-[7px] text-center font-['IBM_Plex_Mono'] text-[9.5px] font-normal text-[#5B6B7E]">
                13
              </div>
              {/* … 残りの日付セルを算出して展開 … */}
            </div>
          </div>

          {/* ---- 工程バー行 ---- */}
          {/* bars.map((b) => ( ... )) 。状態により done / active / plan を出し分け */}

          {/* 行1: 完了(done) */}
          <div className="flex border-b border-[#E9EEF3]">
            <div className="sticky left-0 z-[2] flex max-w-[140px] min-w-[140px] items-center gap-2 border-r-2 border-[#D8E0E8] bg-white px-3 font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-[#124272]">
              <span className="flex-1 truncate whitespace-nowrap">準備工</span>
              <span title="削除" className="flex-shrink-0 cursor-pointer text-sm text-[#B8C4D0] hover:text-[#F08519]">
                ×
              </span>
            </div>
            <div className="relative h-[52px] w-[560px] bg-[repeating-linear-gradient(90deg,transparent_0,transparent_27px,#EDF1F5_27px,#EDF1F5_28px)]">
              {/* 完了バー: left / width は日付から算出 */}
              <div
                className="absolute top-[9px] flex h-[34px] items-center overflow-hidden whitespace-nowrap rounded-lg bg-[linear-gradient(180deg,#9FB2C2,#8FA3B5)] px-2.5 font-['Zen_Kaku_Gothic_New'] text-[11.5px] font-bold text-white"
                style={{ left: '0%', width: '18%' }}
              >
                <span>準備工</span>
              </div>
            </div>
          </div>

          {/* 行2: 進行中(active) — today 線を含む */}
          <div className="flex border-b border-[#E9EEF3]">
            <div className="sticky left-0 z-[2] flex max-w-[140px] min-w-[140px] items-center gap-2 border-r-2 border-[#D8E0E8] bg-white px-3 font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-[#124272]">
              <span className="flex-1 truncate whitespace-nowrap">路盤工</span>
              <span title="削除" className="flex-shrink-0 cursor-pointer text-sm text-[#B8C4D0] hover:text-[#F08519]">
                ×
              </span>
            </div>
            <div className="relative h-[52px] w-[560px] bg-[repeating-linear-gradient(90deg,transparent_0,transparent_27px,#EDF1F5_27px,#EDF1F5_28px)]">
              {/* today 線（範囲内のとき表示）: left は算出。上端に▼マーカー */}
              <div
                className="absolute top-0 bottom-0 z-[4] w-0 border-l-2 border-dashed border-[#F08519] before:absolute before:top-[-1px] before:left-[-7px] before:border-l-[6px] before:border-r-[6px] before:border-t-[9px] before:border-l-transparent before:border-r-transparent before:border-t-[#F08519] before:content-['']"
                style={{ left: '38%' }}
              />
              {/* 進行中バー: 破線 + 名前チップ付き */}
              <div
                className="absolute top-[9px] flex h-[34px] items-center overflow-hidden whitespace-nowrap rounded-lg bg-[linear-gradient(180deg,#3D4855,#2E3742)] px-2.5 font-['Zen_Kaku_Gothic_New'] text-[11.5px] font-bold text-white shadow-[0_2px_6px_rgba(18,40,64,.25)] outline outline-2 outline-offset-1 outline-[#23A9C6] after:absolute after:inset-x-2 after:top-1/2 after:h-0 after:-translate-y-px after:border-t-2 after:border-dashed after:border-white/55 after:content-['']"
                style={{ left: '20%', width: '30%' }}
              >
                <span className="relative z-[1] rounded bg-[#2E3742] px-1.5">路盤工</span>
              </div>
            </div>
          </div>

          {/* 行3: 予定(plan) */}
          <div className="flex border-b border-[#E9EEF3]">
            <div className="sticky left-0 z-[2] flex max-w-[140px] min-w-[140px] items-center gap-2 border-r-2 border-[#D8E0E8] bg-white px-3 font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-[#124272]">
              <span className="flex-1 truncate whitespace-nowrap">舗装工</span>
              <span title="削除" className="flex-shrink-0 cursor-pointer text-sm text-[#B8C4D0] hover:text-[#F08519]">
                ×
              </span>
            </div>
            <div className="relative h-[52px] w-[560px] bg-[repeating-linear-gradient(90deg,transparent_0,transparent_27px,#EDF1F5_27px,#EDF1F5_28px)]">
              {/* 予定バー: 斜線ハッチ + inset ring */}
              <div
                className="absolute top-[9px] flex h-[34px] items-center overflow-hidden whitespace-nowrap rounded-lg bg-[repeating-linear-gradient(-45deg,#DEE7EE_0_8px,#EDF2F6_8px_16px)] px-2.5 font-['Zen_Kaku_Gothic_New'] text-[11.5px] font-bold text-[#5B6B7E] shadow-[inset_0_0_0_1.5px_#D8E0E8]"
                style={{ left: '55%', width: '25%' }}
              >
                <span>舗装工</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 凡例 */}
      <div className="mt-3 flex flex-wrap items-center gap-[18px] text-xs text-[#5B6B7E]">
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-3 w-[26px] rounded bg-[#2E3742]" />
          進行中
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-3 w-[26px] rounded bg-[#8FA3B5]" />
          完了
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-3 w-[26px] rounded border border-[#D8E0E8] bg-[repeating-linear-gradient(-45deg,#DEE7EE_0_5px,#EDF2F6_5px_10px)]" />
          予定
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-3 w-0 border-l-2 border-dashed border-[#F08519]" />
          &nbsp;今日
        </span>
      </div>
    </div>
  );
}
