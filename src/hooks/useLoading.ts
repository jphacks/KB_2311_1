import { LoadingState } from "@/store/loading";
import { Loading } from "@/type/loading";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

//Loadingを管理するカスタムフック
export const useLoading = () => {
  const [state, setState] = useRecoilState<Loading>(LoadingState);
  const showLoading = useCallback((): void => {
    setState({ ...state, ...{ isLoading: true } });
  }, []);
  const hideLoading = useCallback((): void => {
    setState({ ...state, ...{ isLoading: false } });
  }, []);

  return { showLoading, hideLoading };
};
