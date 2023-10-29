import { ReactNode } from "react";
import { UserHeader } from "../Header/UserHeader";

type Props = {
  children: ReactNode;
};

export const UserLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <UserHeader />
      <main>{children}</main>
    </>
  );
};
