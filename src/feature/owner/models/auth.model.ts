
import { AuthRequest, authRequest } from "../requests/auth.request";
import { OwnerRequest, ownerRequest } from "../requests/owner.request";
import { SignUpType } from "../type/owner";
import { OwnerModel } from "./owner.model";

// model 
export type OwnerWithTokenModel = OwnerModel & {
 token: string
}

export const authFactory = (req?: AuthRequest) => {
  const request = req ?? authRequest;

  return {
    signUp: async (signUpData: SignUpType) => {
      const response = await request.signUp(signUpData);
      return response
    }
  }
}