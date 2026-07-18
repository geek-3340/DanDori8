import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    return (
        <>
            <Head title="新規登録" />

            {/* タブ */}
            <div className="mb-6 flex rounded-[10px] bg-app-bg p-1">
                {/* active: 白背景 + shadow */}
                <TextLink href={login()} tabIndex={5} className="flex-1 rounded-[7px] border-0 bg-transparent text-center p-[9px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-app-link shadow-none"
                >
                    ログイン
                </TextLink>
                {/* inactive: 透明背景 */}
                <button
                    type="button"
                    className="flex-1 rounded-[7px] border-0 bg-white p-[9px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-[#124272] shadow-[0_1px_3px_rgba(18,66,114,.12)]">
                    新規登録
                </button>
            </div>

            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-3.5">
                            <div className="grid gap-[5px]">
                                <Label htmlFor="name">ユーザー名</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="現場太郎"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-[5px]">
                                <Label htmlFor="email">メールアドレス</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="you@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-[5px]">
                                <Label htmlFor="password">パスワード</Label>
                                <PasswordInput
                                    id="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="••••••••"
                                    passwordrules={passwordRules}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-[5px]">
                                <Label htmlFor="password_confirmation">
                                    パスワード再入力
                                </Label>
                                <PasswordInput
                                    id="password_confirmation"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="••••••••"
                                    passwordrules={passwordRules}
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <Button
                                type="submit"
                                tabIndex={5}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                アカウント作成
                            </Button>
                        </div>
                    </>

                )}
            </Form>
        </>
    );
}