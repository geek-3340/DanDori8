import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Menu, Search } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import { Breadcrumbs } from '@/components/breadcrumbs';
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
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { cn, toUrl } from '@/lib/utils';
import { dashboard } from '@/routes';
import type { BreadcrumbItem, NavItem } from '@/types';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

const mainNavItems: NavItem[] = [
    {
        title: '現場一覧',
        href: dashboard(),
    },
];

const activeItemStyles =
    'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

export function AppHeader({ breadcrumbs = [] }: Props) {
    const page = usePage();
    const { auth } = page.props;
    const getInitials = useInitials();
    const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl();

    return (
        // <>
        //     {/* ===== ヘッダー ===== */}
        //     <header className="relative flex h-18 flex-shrink-0 items-center gap-3.5 bg-app-primary px-[18px] text-white">
        //         {/* 上端の斜めストライプ */}
        //         <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_10px,#124272_10px_20px)]" />

        //         <div className="flex items-center gap-px">
        //             <img src="/logo.png" alt="" className="w-auto h-18" />
        //         </div>

        //         {/* PC 用グローバルナビ */}
        //         <nav className="ml-2 hidden items-center gap-4 md:flex">
        //             {/* active: border/opacity フル */}
        //             <button
        //                 type="button"
        //                 className="border-0 border-b-[3px] border-app-back bg-transparent px-1 py-[25px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white opacity-100"
        //             >
        //                 現場一覧
        //             </button>
        //             {/* inactive: border 透明 + opacity 低 */}
        //             <button
        //                 type="button"
        //                 className="border-0 border-b-[3px] border-transparent bg-transparent px-1 py-[25px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-white opacity-70"
        //             >
        //                 工程マスタ
        //             </button>
        //         </nav>

        //         <div className="flex-1" />

        //         {/* ログアウト / ユーザー */}
        //         <DropdownMenu>
        //             <DropdownMenuTrigger asChild>
        //                 <Button
        //                     variant="ghost"
        //                     className="size-10 rounded-full p-1"
        //                 >
        //                     <Avatar className="size-8 overflow-hidden rounded-full">
        //                         <AvatarImage
        //                             src={auth.user?.avatar}
        //                             alt={auth.user?.name}
        //                         />
        //                         <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
        //                             {getInitials(auth.user?.name ?? '')}
        //                         </AvatarFallback>
        //                     </Avatar>
        //                 </Button>
        //             </DropdownMenuTrigger>
        //             <DropdownMenuContent className="w-56" align="end">
        //                 {auth.user && (
        //                     <UserMenuContent user={auth.user} />
        //                 )}
        //             </DropdownMenuContent>
        //         </DropdownMenu>
        //     </header>
        // </>
        <>
            <div className="relative flex h-18 shrink-0 items-center gap-3.5 bg-app-primary px-[18px] text-white">

                {/* 上端の斜めストライプ */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_10px,#124272_10px_20px)]" />

                <div className="mx-auto flex h-18 items-center px-4 md:max-w-7xl">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-2 h-[34px] w-[34px]"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar"
                            >
                                <SheetTitle className="sr-only">
                                    Navigation menu
                                </SheetTitle>
                                <SheetHeader className="flex justify-start text-left">
                                    <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                    <div className="flex h-full flex-col justify-between text-sm">
                                        <div className="flex flex-col space-y-4">
                                            {mainNavItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && (
                                                        <item.icon className="h-5 w-5" />
                                                    )}
                                                    <span>{item.title}</span>
                                                </Link>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

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
                                        className="relative flex h-full items-center"
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                whenCurrentUrl(
                                                    item.href,
                                                    activeItemStyles,
                                                ),
                                                'cursor-pointer font-bold text-white text-[13px] font-sans',
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
                                    <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
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
            </div>
        </>
    );
}
