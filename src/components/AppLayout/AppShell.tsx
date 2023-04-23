import { AppShell } from "@mantine/core";
import type { ReactNode } from "react";
import HeaderComponent from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }: { children: ReactNode }) => (
  <AppShell
    header={<HeaderComponent />}
    footer={<Footer />}
  >
    {children}
  </AppShell> 
);

export default AppLayout;