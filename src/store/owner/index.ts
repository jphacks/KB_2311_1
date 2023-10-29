import { OwnerModel } from "@/feature/owner/models/owner.model";
import { Owner } from "@/feature/owner/type/owner";
import { atom } from "recoil";

//最初の状態をnullにする
export type OwnerStateType = OwnerModel | null;

export const OwnerState = atom<OwnerStateType>({
  key: "OwnerState",
  default: null,
});
