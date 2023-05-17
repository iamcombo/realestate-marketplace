import { AppShell } from '@mantine/core';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import PageRouteTransition from '../PageRoute/PageRouteTransition';
import Footer from './Footer';
import HeaderComponent from './Header';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();

  return (
    <AppShell
      header={<HeaderComponent />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <PageRouteTransition keyProp={pathname}>{children}</PageRouteTransition>
    </AppShell>
  );
};

export default AppLayout;
