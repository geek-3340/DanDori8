import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <AuthLayoutTemplate>
            {children}
        </AuthLayoutTemplate>
    );
}
