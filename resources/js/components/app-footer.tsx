import { Link, usePage } from '@inertiajs/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { UserMenuContent } from '@/components/user-menu-content';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';
import { dashboard, processMaster, sitesIndex } from '@/routes';
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
    const page = usePage();
    const { auth } = page.props;
    const getInitials = useInitials();
    const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl();

    return (
        <>
            <div className="relative flex h-18 shrink-0 justify-between items-center gap-3.5 bg-app-primary px-[18px] text-white">

                {/* 上端の斜めストライプ */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_10px,#124272_10px_20px)]" />

                <div className="flex h-18 items-center px-2 md:max-w-7xl">

                    <Link
                        href={dashboard()}
                        prefetch
                    >
                        <div className="flex items-center gap-px">
                            <img src="/logo.png" alt="" className="w-auto h-18" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="h-full ml-2 hidden items-center gap-4 lg:flex">
                        <NavigationMenu className="flex h-full items-stretch">
                            <NavigationMenuList className="flex h-full items-stretch space-x-2">
                                {mainNavItems.map((item, index) => (
                                    <NavigationMenuItem
                                        key={index}
                                        className="relative flex h-full items-stretch"
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                whenCurrentUrl(
                                                    item.href,
                                                    "", // ボーダー要素を追加する為、指定無し
                                                ),
                                                'cursor-pointer font-gothic font-bold text-white text-[13px]',
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                        {isCurrentUrl(item.href) && (
                                            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-app-back"></div>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                </div>

                {/* ログアウト / ユーザー */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="size-10 rounded-full p-1"
                        >
                            <Avatar className="size-8 overflow-hidden rounded-full">
                                <AvatarImage
                                    src={auth.user?.avatar}
                                    alt={auth.user?.name}
                                />
                                <AvatarFallback className="rounded-lg font-gothic bg-app-secondary text-white">
                                    {getInitials(auth.user?.name ?? '')}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        {auth.user && (
                            <UserMenuContent user={auth.user} />
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </>
    );
}
