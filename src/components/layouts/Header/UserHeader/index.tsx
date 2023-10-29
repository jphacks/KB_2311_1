import { Heading } from "@/components/Heading/user";

export const UserHeader = (): JSX.Element => {
  return (
    <header className="w-full px-2 py-3 border-b border-gray-300">
      <Heading />
      {/* 右端にアイコンを表示 -> ログインしている人は顔,していない人は認証に飛ばす。 */}
    </header>
  );
};
