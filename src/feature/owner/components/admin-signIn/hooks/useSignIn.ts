import { FAIL_TO_SIGNIN, SUCCESS_TO_SIGNIN } from "@/constants/messages";
import { ownerFactory } from "@/feature/owner/models/owner.model";
import { SignInInputType } from "@/feature/owner/type/schema";
import { useLoading } from "@/hooks/useLoading";
import { useNotice } from "@/hooks/useNotice";
import { setAuthToken } from "@/lib/axios";
import { auth } from "@/lib/firebase";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";

export const useSignIn= () => {
  const { showLoading, hideLoading } = useLoading();
  const notice = useNotice();

  const handleSignIn = async({ email, password}: SignInInputType) => {
    try {
      showLoading();
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //token取得
      const token = await userCredential.user.getIdToken();
      setAuthToken(token);

      const owner = await ownerFactory().getByFirebaseUID();
      hideLoading();
      notice.success(SUCCESS_TO_SIGNIN)
      return owner 
    } catch (error: unknown) {
      hideLoading();
      const isTypeSafeError = error instanceof Error;
      notice.error(`${FAIL_TO_SIGNIN}\n${isTypeSafeError ? error.message : ""}`)
    }
  }

  return {
    handleSignIn
  }
}