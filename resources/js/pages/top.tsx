import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="トップ" />
            <div className="flex min-h-screen flex-col bg-app-asphalt font-['IBM_Plex_Sans_JP']">
                {/* ===== ヘッダー ===== */}
                <header className="relative flex h-18 flex-shrink-0 justify-between items-center gap-3.5 px-[18px] text-white">
                    {/* 上端の斜めストライプ */}
                    <div className="absolute inset-x-0 top-18 h-2 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_10px,#124272_10px_20px)]" />

                    <div className="flex items-center gap-px">
                        <img src="/logo.png" alt="" className="w-auto h-18" />
                    </div>
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-white px-5 py-1.5 text-sm leading-normal text-white transition duration-200 ease-in-out hover:border-transparent hover:bg-app-secondary hover:drop-shadow-[0_0_18px] hover:drop-shadow-app-secondary"
                            >
                                ダッシュボードへ
                            </Link>
                        ) : (
                            <Link
                                href={login()}
                                className="inline-block rounded-sm border border-white px-5 py-1.5 text-sm leading-normal text-white transition duration-200 ease-in-out hover:border-transparent hover:bg-app-secondary hover:drop-shadow-[0_0_18px] hover:drop-shadow-app-secondary"
                            >
                                ログイン
                            </Link>
                        )}
                    </nav>
                </header>
                <main>
                    <div className="flex gap-30">
                        <div className="mt-25 ml-20 flex flex-col gap-8">
                            <p className='text-app-secondary'>道路工事　工程管理アプリ</p>
                            <h2 className='text-6xl text-white font-bold'>段取り<span className='text-app-secondary'>八分</span></h2>
                            <p className='text-sm text-[#C6D0DA]'>現場ごとの工程を３カ月ガントで管理。複数現場の工程管理を最適化！！</p>
                            <Link
                                href={register()}
                                className="inline-block w-max rounded-sm bg-app-secondary drop-shadow-[0_0_18px] drop-shadow-app-secondary px-6 py-3 text-sm font-bold leading-normal text-white transition duration-200 ease-in-out hover:drop-shadow-transparent"
                            >
                                無料で始める
                            </Link>
                        </div>
                        <img src="/app_image.png" alt="app_img" className="mt-25 w-1/2 rounded-2xl" />
                    </div>
                </main>
            </div>
        </>
    );
}