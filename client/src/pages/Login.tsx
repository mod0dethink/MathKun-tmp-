import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: APIに送信
    console.log({ email, password, rememberMe });
  };

  return (
    <AuthLayout
      title="ログイン"
      subtitle="登録したメールアドレスとパスワードを入力してください。"
      footerLabel="まだアカウントをお持ちでない方は"
      footerLinkLabel="新規登録"
      footerLinkTo="/signup"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-200"
            htmlFor="login-email"
          >
            メールアドレス
          </label>
          <input
            id="login-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            type="email"
            required
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-200"
            htmlFor="login-password"
          >
            パスワード
          </label>
          <input
            id="login-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
            type="password"
            required
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition"
          />
        </div>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="rounded border-slate-600 bg-slate-900/60 text-blue-500 focus:ring-blue-500/40"
            />
            ログイン状態を保持する
          </label>
          <button
            type="button"
            className="font-medium text-blue-300 hover:text-blue-200"
          >
            パスワードをお忘れですか？
          </button>
        </div>
        <button
          type="submit"
          className="w-full rounded-2xl bg-blue-500 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-400 transition"
        >
          サインイン
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
