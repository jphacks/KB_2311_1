import Link from "next/link";

type Props = {
  innerText: string;
  path: string;
  toggleText: "新規登録" | "ログイン";
};

export const SignInSignUpToggle = ({
  innerText,
  path,
  toggleText,
}: Props): JSX.Element => (
  <div className="flex flex-col text-center text-sm mt-2">
    <p className="mt-1">
      {innerText}
      {
        <Link href={path} className="font-bold hover:text-red-500">
          &nbsp;{toggleText}
        </Link>
      }
    </p>
  </div>
);

// アカウント作成の方はこちらから
