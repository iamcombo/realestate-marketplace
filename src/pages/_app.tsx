import '@/styles/globals.css';
import { AppLayout, AppWrapper } from '@/components';
import type { AppProps } from 'next/app';

export default ({ Component, pageProps }: AppProps) => (
  <AppWrapper>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </AppWrapper>
);
