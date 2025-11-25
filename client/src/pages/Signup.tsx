import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO:　APIに送信
    console.log({ name, email, password });
  };

  return (
    <AuthLayout
      title="アカウント作成"
      subtitle="1分で完了します。必要な情報を入力してください。"
      footerLabel="すでに登録済みの場合は"
      footerLinkLabel="ログイン"
      footerLinkTo="/login"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-200"
            htmlFor="signup-name"
          >
            お名前
          </label>
          <input
            id="signup-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="山田 太郎"
            required
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-200"
            htmlFor="signup-email"
          >
            メールアドレス
          </label>
          <input
            id="signup-email"
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
            htmlFor="signup-password"
          >
            パスワード
          </label>
          <input
            id="signup-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="8文字以上"
            type="password"
            minLength={8}
            required
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-2xl bg-blue-500 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-400 transition"
        >
          アカウントを作成
        </button>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
