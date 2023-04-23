import '@/styles/globals.css';
import { AppLayout, AppWrapper } from '@/components';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppWrapper>
  )
};
