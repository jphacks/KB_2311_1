import { OwnerRequest, ownerRequest } from "../requests/owner.request";

// model 
export type OwnerModel = {
  id?: string;
  firebase_uid?: string;
  email: string;
  phone_number: string;
  last_name: string;
  first_name: string;
}

export const ownerFactory = (req?: OwnerRequest) => {
  const request = req ?? ownerRequest;

  return {
    getByFirebaseUID: async () => {
      const response = await request.getByFirebaseUID();
      return response
    }
  }
}