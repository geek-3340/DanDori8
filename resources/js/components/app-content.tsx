import * as React from 'react';
import type { AppVariant } from '@/types';

type Props = React.ComponentProps<'main'> & {
    variant?: AppVariant;
};

export function AppContent({ children, ...props }: Props) {
    return (
        <main
            className="flex flex-1 flex-col gap-4 mx-auto mt-26 px-8 w-full h-full max-w-7xl rounded-xl lg:mt-8"
            {...props}
        >
            {children}
        </main>
    );
}
