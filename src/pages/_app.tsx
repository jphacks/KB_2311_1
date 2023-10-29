import { Loading } from "@/components/Loading";
import { ToastModal } from "@/components/ToastModal";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import { AxiosErrorHandleProvider } from "@/components/Provider/axiosErrorHandleProvider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AxiosErrorHandleProvider>
      <RecoilRoot>
        <ToastContainer position="top-right" theme="colored" />
        <ToastModal />
        <Loading />
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </AxiosErrorHandleProvider>
  );
}
