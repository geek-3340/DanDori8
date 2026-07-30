
import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// メインコンポーネント（ineriaにて宣言）
createInertiaApp({
    // headのtitleを動的に生成
    title: (title) => (title ? `${title} - ${appName}` : appName),

    // Routeに応じたlayout設定
    layout: (name) => {
        switch (true) {
            case name === 'top':
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },

    // TSの厳格モード
    strictMode: true,

    // 全ページにおいてコンテンツを内包するコンポーネントを設定
    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                {/* ↙ 「保存しました」みたいな画面にフワッと描画されて消えるやつ＝トースター */}
                <Toaster />
            </TooltipProvider>
        );
    },

    // ブラウザのローディングバーの色を設定
    progress: {
        color: '#23A9C6',
    },
});