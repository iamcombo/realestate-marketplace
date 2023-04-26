import { AppShell } from "@mantine/core";
import type { ReactNode } from "react";
import HeaderComponent from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }: { children: ReactNode }) => (
  <AppShell
    header={<HeaderComponent />}
    footer={<Footer />}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
  >
    {children}
  </AppShell> 
);

export default AppLayout;