"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/shared/lib/mui/theme/theme.config";

function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Providers;
