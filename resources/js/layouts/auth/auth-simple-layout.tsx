import { Link } from '@inertiajs/react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
}: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col font-['IBM_Plex_Sans_JP'] md:flex-row">
            {/* ===== 左：ブランドパネル ===== */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-[#1A5A9C] px-[30px] py-9 text-white md:w-[42%]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_12px,#124272_12px_24px)]" />
                <div className="mt-2.5 flex items-center gap-px font-['Zen_Kaku_Gothic_New'] text-xl font-black">
                    <img src="/logo.png" alt="" className="w-auto h-18" />
                </div>
                <div>
                    <h2 className="m-0 mb-2.5 font-['Zen_Kaku_Gothic_New'] text-2xl font-black leading-[1.35]">
                        現場も、工程も、
                        <br />
                        手のひらで段取り。
                    </h2>
                    <p className="m-0 text-[13px] leading-[1.8] text-[#C9DBEC]">
                        施工管理者のための、シンプルな工程管理。
                    </p>
                </div>
                <Link href={home()}>
                    <a className="cursor-pointer font-['IBM_Plex_Mono'] text-[12.5px] text-[#8FE3F1]">← トップへ戻る</a>
                </Link>
            </div>

            {/* ===== 右：フォーム ===== */}
            <div className="flex flex-1 flex-col justify-start bg-white px-[30px] pt-30">
                <div className="mx-auto w-full max-w-[340px]">
                    {children}
                </div>
            </div>
        </div>
    );
}