import { Routing } from "@/Routing/routing";
import { axiosInstance } from "@/lib/axios"
import { useRouter } from "next/router"
import { useEffect } from "react"

type Props = { children: any };

export const AxiosErrorHandleProvider = ({ children }: Props) => {
  const router = useRouter()
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        console.log('responseのエラー',error);
        switch(error.response.status) {
          case 400:
            console.error("400です")
          case 401:
            //signInPageに遷移
            console.error("401です");
            router.push(Routing.ownerSignIn.buildRoute().path)
            break;
          case 403: 
            console.error("権限がありません403");
            break;
          case 404: 
            console.error('404')
            router.push('/404')
            break;
          default:
            console.error("internal server error")
        };
    
        const errorMessage = (error.response?.data.message || "").split(",");
        throw new Error(errorMessage);
      }
    )
  }, [])

  return <>{children}</>;
}