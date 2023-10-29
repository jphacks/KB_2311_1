import { ToastState } from "@/store/toast";
import { Toast } from "@/type/toast";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useToast = () => {
  const [state, setState] = useRecoilState<Toast>(ToastState);
  const showToast = useCallback(
    ({ message, style }: Omit<Toast, "isShown">): void => {
      setState({ ...state, ...{ isShown: true, message, style } });
    },
    []
  );
  const hideToast = useCallback((): void => {
    setState({ ...state, ...{ isShown: false } });
  }, []);
  return { showToast, hideToast };
};
