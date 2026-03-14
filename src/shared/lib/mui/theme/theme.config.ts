import { createTheme } from "@mui/material/styles";

import breakpoints from "./breakpoints/breakpoints.config";
import typography from "./typography/typography.config";

const theme = createTheme({
  spacing: 4,
  breakpoints,
  typography,
});

export default theme;
