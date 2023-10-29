import { Routing } from "@/Routing/routing";
import { SignInForm } from "../components/SignInForm";
import { SignInSignUpToggle } from "../../../shared-components/SignInSignUpToggle";
import { useSignIn } from "../hooks/useSignIn";
import { SignInInputType } from "@/feature/owner/type/schema";
import { useRouter } from "next/router";

export const OwnerSignIn = () => {
  const router = useRouter();

  const { handleSignIn } = useSignIn();

  const onSubmit = async(data: SignInInputType) => {
    const owner = await handleSignIn({email: data.email, password: data.password});
    if (owner) return router.push(Routing.adminRentalHouses.buildRoute().path);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <SignInForm 
        onSubmit={onSubmit}
      />
      <SignInSignUpToggle
        innerText="新規登録はこちら"
        toggleText="新規登録"
        path={Routing.ownerSignUp.buildRoute().path}
      />
    </div>
  );
};
