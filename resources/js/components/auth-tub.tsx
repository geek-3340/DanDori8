import TextLink from '@/components/text-link';
import { login } from '@/routes';

function AuthTub() {
    

    // resources/js/components/nav-main.tsxのロジックを参照にする


    return (
        <>
            {/* register */}
            <div className="mb-6 flex rounded-[10px] bg-app-bg p-1">
                {/* active: 白背景 + shadow */}
                <TextLink href={login()} tabIndex={5} className="flex-1 rounded-[7px] border-0 bg-transparent text-center p-2.25 font-gothic text-[13px] font-bold text-app-link shadow-none"
                >
                    ログイン
                </TextLink>
                <button
                    type="button"
                    className="flex-1 rounded-[7px] border-0 bg-white p-2.25 font-gothic text-[13px] font-bold text-app-primary shadow-[0_1px_3px_rgba(18,66,114,.12)]">
                    新規登録
                </button>
            </div>

            {/* login */}
            <div className="mb-6 flex rounded-[10px] bg-app-bg p-1">
                            <button
                                type="button"
                                className="flex-1 rounded-[7px] border-0 bg-white p-2.25 font-gothic text-[13px] font-bold text-app-primary shadow-[0_1px_3px_rgba(18,66,114,.12)]"
                            >
                                ログイン
                            </button>
                            <TextLink href={register()} tabIndex={5} className="flex-1 rounded-[7px] border-0 bg-transparent text-center p-2.25 font-gothic text-[13px] font-bold text-app-link shadow-none">
                                新規登録
                            </TextLink>
                        </div>
        </>
    );
}
export default AuthTub();