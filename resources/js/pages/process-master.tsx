export default function ProcessMaster() {
  return (
    <div>
      <h3 className="m-0 mb-1 font-gothic text-[21px] font-black text-app-primary">工程マスタ</h3>
      <p className="m-0 mb-4.5 max-w-140 text-[12.5px] text-app-link">
        よく使う工程を登録しておくと、現場作成時に選ぶだけで工程を割り当てられます。
      </p>

      {/* 追加フォーム */}
      <div className="mb-4.5 flex max-w-[520px] gap-2">
        <input
          placeholder="工程名を入力（例：排水構造物工）"
          className="flex-1 rounded-[10px] border-[1.5px] border-[#D8E0E8] bg-white px-3.5 py-[11px] font-ibm text-[13px] focus:border-transparent focus:outline focus:outline-2 focus:outline-app-secondary"
        />
        <button
          type="button"
          className="rounded-[10px] border-0 bg-app-primary px-4.5 py-[11px] font-gothic text-[13px] font-bold text-white"
        >
          登録
        </button>
      </div>

      {/* マスタ一覧（PC 3列 / タブレット 2列 / スマホ 1列） */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {/* ↓ 1件分。master.map((m) => ( ... )) で繰り返し */}
        <div className="flex items-center gap-3 rounded-xl border border-[#D8E0E8] bg-white px-4 py-3.5">
          <span className="w-3 h-3 rounded-md bg-[repeating-linear-gradient(-45deg,#1A5A9C_0_4px,#23A9C6_4px_8px)]" />
          <div className="min-w-0 flex-1 font-gothic text-sm font-bold text-app-asphalt">準備工</div>
          <span title="削除" className="shrink-0 cursor-pointer text-base text-[#B8C4D0] hover:text-[#F08519] hover:font-bold">
            ×
          </span>
        </div>

        {/* サンプル: 路盤工 */}
        <div className="flex items-center gap-3 rounded-xl border border-[#D8E0E8] bg-white px-4 py-3.5">
          <span className="w-3 h-3 rounded-md bg-[repeating-linear-gradient(-45deg,#1A5A9C_0_4px,#23A9C6_4px_8px)]" />
          <div className="min-w-0 flex-1 font-gothic text-sm font-bold text-app-asphalt">路盤工</div>
          <span title="削除" className="shrink-0 cursor-pointer text-base text-[#B8C4D0] hover:text-[#F08519] hover:font-bold">
            ×
          </span>
        </div>

        {/* サンプル: 舗装工 */}
        <div className="flex items-center gap-3 rounded-xl border border-[#D8E0E8] bg-white px-4 py-3.5">
          <span className="w-3 h-3 rounded-md bg-[repeating-linear-gradient(-45deg,#1A5A9C_0_4px,#23A9C6_4px_8px)]" />
          <div className="min-w-0 flex-1 font-gothic text-sm font-bold text-app-asphalt">舗装工</div>
          <span title="削除" className="shrink-0 cursor-pointer text-base text-[#B8C4D0] hover:text-[#F08519] hover:font-bold">
            ×
          </span>
        </div>
      </div>
    </div>
  );
}
