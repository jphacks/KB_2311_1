import { axiosInstance } from "@/lib/axios";
import { Owner } from "../type/owner";

export type OwnerRequest = {
  getByFirebaseUID: () => Promise<Owner>
}

const getByFirebaseUID: OwnerRequest['getByFirebaseUID'] = async() => {
  const res = await axiosInstance.get("/owner/firebase-uid");
  return res.data;
};

export const ownerRequest: OwnerRequest = {
  getByFirebaseUID
}