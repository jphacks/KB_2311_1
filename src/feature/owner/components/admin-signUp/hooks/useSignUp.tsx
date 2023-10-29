import { FAIL_TO_SIGNUP, SUCCESS_TO_SIGNUP } from "@/constants/messages";
import { authFactory } from "@/feature/owner/models/auth.model";
import { SignUpType } from "@/feature/owner/type/owner";
import { useCertainOwner } from "@/hooks/useCertainOwner";
import { useLoading } from "@/hooks/useLoading"
import { useNotice } from "@/hooks/useNotice";
import { setAuthToken } from "@/lib/axios";
import { auth } from "@/lib/firebase";
import { signInWithCustomToken } from "firebase/auth";

export const useSignUp = () => {
  const { showLoading, hideLoading } = useLoading();
  const notice = useNotice();
  const { setOwner } = useCertainOwner();

  const handleSignUp = async(signUpData: SignUpType) => {
    try {
      showLoading();
      const response = await authFactory().signUp(signUpData);
      const userCredential = await signInWithCustomToken(auth, response.token);
      const idToken = await userCredential.user.getIdToken();
      setAuthToken(idToken);
      setOwner(response);

      hideLoading();
      notice.success(SUCCESS_TO_SIGNUP);
      return response
    } catch (error: unknown) {
      hideLoading();
      const isTypeError = error instanceof Error;
      notice.error(`${FAIL_TO_SIGNUP}\n${isTypeError ? error.message : ""}`)
    }
  }

  return {
    handleSignUp
  }
}