import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";
import nProgress from "nprogress";
import {Router} from "next/router";
import "nprogress/nprogress.css";
import LoadingScreen from "@/components/shared/LoadingScreen";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}


export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? (page => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);
  nProgress.configure({ showSpinner: false });

  return (
    <>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
      <LoadingScreen />
    </>
  )
}
