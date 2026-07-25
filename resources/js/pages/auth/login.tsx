import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="ログイン" />

            {/* タブ */}
            <div className="mb-6 flex rounded-[10px] bg-app-bg p-1">
                <button
                    type="button"
                    className="flex-1 rounded-[7px] border-0 bg-white p-[9px] font-gothic text-[13px] font-bold text-app-primary shadow-[0_1px_3px_rgba(18,66,114,.12)]"
                >
                    ログイン
                </button>
                <TextLink href={register()} tabIndex={5} className="flex-1 rounded-[7px] border-0 bg-transparent text-center p-[9px] font-gothic text-[13px] font-bold text-app-link shadow-none">
                    新規登録
                </TextLink>
            </div>

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-3.5">
                            <div className='grid gap-[5px]'>
                                <Label htmlFor="email">メールアドレス</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className='grid gap-[5px]'>
                                <Label htmlFor="password">パスワード</Label>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex justify-center items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember">ログイン状態を保持する</Label>
                            </div>

                            <Button
                                type="submit"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Spinner />}
                                ログイン
                            </Button>

                            {canResetPassword && (
                                <TextLink
                                    href={request()}
                                    className="cursor-pointer text-center font-['IBM_Plex_Sans_JP'] text-xs text-app-link"
                                    tabIndex={5}
                                >
                                    パスワードをお忘れですか？
                                </TextLink>
                            )}
                        </div>

                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </>
    );
}
