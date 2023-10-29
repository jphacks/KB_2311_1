import { Toast } from "@/type/toast";
import { atom } from "recoil";

export const ToastState = atom<Toast>({
  key: "ToastState",
  default: {
    isShown: false,
    message: "",
    style: "success",
  },
});
