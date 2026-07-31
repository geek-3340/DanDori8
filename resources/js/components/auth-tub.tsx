import TextLink from '@/components/text-link';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { login, register } from '@/routes';
import { NavItem } from '@/types';

function AuthTub() {
    const { isCurrentUrl } = useCurrentUrl();
    const navItems: NavItem[] = [
        {
            title: "ログイン",
            href: login(),
        }, {
            title: "新規登録",
            href: register(),
        }
    ];
    const style = {
        active: "flex-1 rounded-[7px] border-0 bg-white text-center p-2.25 font-gothic text-[13px] font-bold text-app-primary shadow-[0_1px_3px_rgba(18,66,114,.12)]",
        inactive: "flex-1 rounded-[7px] border-0 bg-transparent text-center p-2.25 font-gothic text-[13px] font-bold text-app-link shadow-none",
    };

    return (
        <>
            <div className="mb-6 flex rounded-[10px] bg-app-bg p-1">
                {navItems.map((item) => (
                    <TextLink href={item.href} className={isCurrentUrl(item.href) ? style.active : style.inactive}>
                        {item.title}
                    </TextLink>
                ))
                }
            </div>
        </>
    );
}
export { AuthTub };