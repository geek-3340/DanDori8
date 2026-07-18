/**
 * 工程マスタ（AppShell の <main> 内に表示）
 * 例）<AppShell><ProcessMaster /></AppShell>
 *
 * カードは master を .map() で展開してください。ここではサンプル数件を静的配置。
 */
export default function ProcessMaster() {
  return (
    <div>
      <h3 className="m-0 mb-1 font-['Zen_Kaku_Gothic_New'] text-[21px] font-black text-[#124272]">工程マスタ</h3>
      <p className="m-0 mb-[18px] max-w-[560px] text-[12.5px] text-app-link">
        よく使う工程を登録しておくと、現場作成時に選ぶだけで工程を割り当てられます。
      </p>

      {/* 追加フォーム */}
      <div className="mb-[18px] flex max-w-[520px] gap-2">
        <input
          placeholder="工程名を入力（例：排水構造物工）"
          className="flex-1 rounded-[10px] border-[1.5px] border-[#D8E0E8] bg-white px-3.5 py-[11px] font-['IBM_Plex_Sans_JP'] text-[13px] focus:border-transparent focus:outline focus:outline-2 focus:outline-app-secondary"
        />
        <button
          type="button"
          className="rounded-[10px] border-0 bg-app-primary px-[18px] py-[11px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white"
        >
          登録
        </button>
      </div>

      {/* マスタ一覧（PC 3列 / タブレット 2列 / スマホ 1列） */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {/* ↓ 1件分。master.map((m) => ( ... )) で繰り返し */}
        <div className="flex items-center gap-3 rounded-[12px] border border-[#D8E0E8] bg-white px-4 py-3.5">
          <span className="grid h-[34px] w-[34px] flex-shrink-0 place-items-center rounded-lg bg-[#E3F4F8] before:h-[9px] before:w-4 before:rounded-[2px] before:bg-[repeating-linear-gradient(-45deg,#1A5A9C_0_4px,#23A9C6_4px_8px)] before:content-['']" />
          <div className="min-w-0 flex-1 font-['Zen_Kaku_Gothic_New'] text-sm font-bold text-[#243040]">準備工</div>
          <span title="削除" className="flex-shrink-0 cursor-pointer text-base text-[#B8C4D0] hover:text-[#F08519]">
            ×
          </span>
        </div>

        {/* サンプル: 路盤工 */}
        <div className="flex items-center gap-3 rounded-[12px] border border-[#D8E0E8] bg-white px-4 py-3.5">
          <span className="grid h-[34px] w-[34px] flex-shrink-0 place-items-center rounded-lg bg-[#E3F4F8] before:h-[9px] before:w-4 before:rounded-[2px] before:bg-[repeating-linear-gradient(-45deg,#1A5A9C_0_4px,#23A9C6_4px_8px)] before:content-['']" />
          <div className="min-w-0 flex-1 font-['Zen_Kaku_Gothic_New'] text-sm font-bold text-[#243040]">路盤工</div>
          <span title="削除" className="flex-shrink-0 cursor-pointer text-base text-[#B8C4D0] hover:text-[#F08519]">
            ×
          </span>
        </div>

        {/* サンプル: 舗装工 */}
        <div className="flex items-center gap-3 rounded-[12px] border border-[#D8E0E8] bg-white px-4 py-3.5">
          <span className="grid h-[34px] w-[34px] flex-shrink-0 place-items-center rounded-lg bg-[#E3F4F8] before:h-[9px] before:w-4 before:rounded-[2px] before:bg-[repeating-linear-gradient(-45deg,#1A5A9C_0_4px,#23A9C6_4px_8px)] before:content-['']" />
          <div className="min-w-0 flex-1 font-['Zen_Kaku_Gothic_New'] text-sm font-bold text-[#243040]">舗装工</div>
          <span title="削除" className="flex-shrink-0 cursor-pointer text-base text-[#B8C4D0] hover:text-[#F08519]">
            ×
          </span>
        </div>
      </div>
    </div>
  );
}
