import "@/styles/globals.css";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'


import type { AppProps } from "next/app";
import "typeface-roboto";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
