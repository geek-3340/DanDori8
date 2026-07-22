import { Link } from '@inertiajs/react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { cn } from '@/lib/utils';
import { processMaster, sitesIndex } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: '現場一覧',
        href: sitesIndex(),
    }, {
        title: '工程マスタ',
        href: processMaster(),
    }
];

export function AppFooter() {
    const { whenCurrentUrl } = useCurrentUrl();

    return (
        <>
            <div className="fixed bottom-0 flex w-screen h-18 bg-app-bg border-t border-[#D8E0E8] text-app-primary lg:hidden">
                {/* ===== スマホ用ボトムナビ ===== */}
                <NavigationMenu className="w-screen">
                    <NavigationMenuList className="flex w-screen h-full items-center">
                        {mainNavItems.map((item, index) => (
                            <NavigationMenuItem
                                key={index}
                                className="flex w-full h-full justify-center items-center"
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        whenCurrentUrl(
                                            item.href,
                                            "bg-app-secondary text-white rounded-lg px-2",
                                        ),
                                        'cursor-pointer flex items-center h-8 font-gothic font-bold text-sm',
                                    )}
                                >
                                    {item.title}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

        </>
    );
}
