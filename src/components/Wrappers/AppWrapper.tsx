import type { CSSProperties, ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { Poppins } from "next/font/google";

const poppins: unknown = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--poppins-font',
});

const AppWrapper = ({ children }: { children: ReactNode }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'light',
      colors: {
        slate: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a'],
        primary: ['#c6c1f9', '#b8b2f8', '#a9a3f6', '#9b93f5', '#8d84f3', '#7e74f2', '#7065f0', '#5a51c0', '#4e47a8', '#433d90']
      },
      primaryColor: 'primary',
      fontFamily: poppins as CSSProperties['fontFamily'],
    }}
  >
    {children}
  </MantineProvider>
);

export default AppWrapper;