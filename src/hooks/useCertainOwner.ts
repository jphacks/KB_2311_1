import { Owner } from "@/feature/owner/type/owner";
import { OwnerState, OwnerStateType } from "@/store/owner";
import { useRecoilState } from "recoil";

export const useCertainOwner = () => {
  const [state, setState] = useRecoilState<OwnerStateType>(OwnerState);
  const setOwner = (certainOwner: Owner): void => {
    setState({ ...state, ...certainOwner });
  };

  return { setOwner, owner: state };
};
