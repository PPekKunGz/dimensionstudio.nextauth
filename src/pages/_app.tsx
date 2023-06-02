import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>@Dimension TEST</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/1059440471409184798/1059440964478967838/DimensionPortalFireBG.png"/>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
