import Link from "next/link";

export type Props = {
  path: string;
  innerText: string;
  className?: string;
  target?: string;
};

export const PlainLink = ({
  path,
  innerText,
  className,
  target,
}: Props): JSX.Element => (
  <Link
    href={path}
    target={target}
    className={`flex items-center justify-center bg-pink-color py-3 px-6 rounded-xl text-white w-full ${className}`}
  >
    {innerText}
  </Link>
);
