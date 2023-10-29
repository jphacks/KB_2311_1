import { useRecoilValue } from "recoil";
import { LoadingState } from "../../store/loading";

export const Loading = (): JSX.Element => {
  const state = useRecoilValue(LoadingState);
  if (!state.isLoading) return <></>;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-50 bg-opacity-50">
      <div className="flex flex-col items-center">
        <p className="font-semibold">{state.message}</p>
        <img src="/load.gif" className="w-16 h-16" alt="Loading" />
      </div>
    </div>
  );
};
