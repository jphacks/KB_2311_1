import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { OwnerState, OwnerStateType } from "@/store/owner";
import { auth } from "@/lib/firebase";
import { setAuthToken } from "@/lib/axios";
import { useLoading } from "./useLoading";
import { Routing } from "../Routing/routing";
import { ownerFactory } from "@/feature/owner/models/owner.model";

export const useAuth = (): OwnerStateType => {
  const router = useRouter();
  const [owner, setOwner] = useRecoilState<OwnerStateType>(OwnerState);
  const { showLoading, hideLoading } = useLoading();
  useEffect(() => {
    showLoading();
    const unsub = onAuthStateChanged(auth, async (authUser) => {
      //操作者がfirebase上でログインしている状態でなければ、サインインページにリダイレクト
      if (!authUser) {
        router.push(Routing.ownerSignIn.buildRoute().path);
        return;
      }

      const token = await authUser.getIdToken();
      setAuthToken(token);

      const owner = await ownerFactory().getByFirebaseUID();
      //firebase上でログインしている操作者がDBのuserレコード上では見つからなかった場合も、サインインページにリダイレクト
      if (!owner) {
        router.push(Routing.ownerSignIn.buildRoute().path);
        return;
      }
      setOwner(owner);
    });
    hideLoading();
    return () => unsub();
  }, []);

  return owner;
};

//リファクタ
//contextの形で認証が必要なページを囲う
