import { Routing } from "@/Routing/routing";
import { SignUpForm } from "../components/SignUpForm";
import { SignInSignUpToggle } from "../../../shared-components/SignInSignUpToggle";
import { useSignUp } from "../hooks/useSignUp";
import { SignUpInputType } from "@/feature/owner/type/schema";
import { useRouter } from "next/router";

export const OwnerSignUp = (): JSX.Element => {
  const router = useRouter();
  const { handleSignUp } = useSignUp();

  const onSubmit = async(signUpData: SignUpInputType) => {
    const owner = await handleSignUp(signUpData);
    if (owner?.token) router.push(Routing.adminRentalHouses.buildRoute().path)
  }
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <SignUpForm
        onSubmit={onSubmit}
      />
      <SignInSignUpToggle
        innerText="アカウントお持ちの方はこちらから"
        path={Routing.ownerSignIn.buildRoute().path}
        toggleText="ログイン"
      />
    </div>
  )
}
