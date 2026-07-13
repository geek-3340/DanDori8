/**
 * ランディング画面
 */
export default function Landing() {
  return (
    <div className="min-h-screen bg-[#2E3742] text-white">
      {/* ヘッダー */}
      <div className="flex h-[58px] items-center border-b border-white/10 px-5">
        <div className="flex items-center gap-px font-['Zen_Kaku_Gothic_New'] text-[19px] font-black">
          DanDori<span className="text-[#23A9C6]">8</span>
        </div>
        <div className="flex-1" />
        <button
          type="button"
          className="rounded-lg border border-white/25 bg-transparent px-4 py-[7px] font-['Zen_Kaku_Gothic_New'] text-[12.5px] font-bold text-white"
        >
          ログイン
        </button>
      </div>

      {/* 斜めストライプ */}
      <div className="h-1.5 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_12px,#124272_12px_24px)]" />

      {/* ヒーロー */}
      <div className="flex max-w-[760px] flex-col items-start gap-[22px] px-6 py-14 md:px-16 md:py-24">
        <span className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#23A9C6]">
          道路工事 工程管理アプリ
        </span>
        <h1 className="m-0 font-['Zen_Kaku_Gothic_New'] text-[40px] font-black leading-[1.18] text-white md:text-[64px]">
          段取り<span className="text-[#23A9C6]">八分</span>
        </h1>
        <p className="m-0 max-w-[560px] text-[15px] leading-[1.8] text-[#C6D0DA]">
          現場ごとの工程を3ヶ月ガントで管理。複数現場工程管理を最適化！
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-[10px] border-0 bg-[#23A9C6] px-[26px] py-[13px] font-['Zen_Kaku_Gothic_New'] text-sm font-bold text-white shadow-[0_6px_18px_rgba(35,169,198,.35)]"
          >
            無料で始める
          </button>
        </div>
      </div>
    </div>
  );
}
