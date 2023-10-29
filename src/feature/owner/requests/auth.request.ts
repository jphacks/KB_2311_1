import { axiosInstance} from "@/lib/axios";
import { SignUpType } from "../type/owner";
import { OwnerWithTokenModel } from "../models/auth.model";

export type AuthRequest = {
  signUp: (
    signUpData: SignUpType
  ) => Promise<OwnerWithTokenModel>;
};

const signUp: AuthRequest['signUp'] = async (signUpData: SignUpType) => {
  const response = await axiosInstance.post("/auth/signup", signUpData);
  return response.data
};

export const authRequest: AuthRequest = {
  signUp
}


