import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Mariana Theml</title>
        <meta name="description" content="Welcome to my portfolio showcasing my projects and skills." />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
