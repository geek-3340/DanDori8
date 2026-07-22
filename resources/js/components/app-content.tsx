import * as React from 'react';
import { SidebarInset } from '@/components/ui/sidebar';
import type { AppVariant } from '@/types';

type Props = React.ComponentProps<'main'> & {
    variant?: AppVariant;
};

export function AppContent({ children, ...props }: Props) {
    return (
        <main
            className="mx-auto mt-18 flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl lg:mt-0"
            {...props}
        >
            {children}
        </main>
    );
}
