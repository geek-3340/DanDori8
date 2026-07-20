import AppLayoutTemplate from '@/layouts/app/app-header-layout';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppLayoutTemplate>
            {children}
        </AppLayoutTemplate>
    );
}
