import { createTheme } from "@mui/material/styles";

import breakpoints from "./breakpoints/breakpoints.config";
import typography from "./typography/typography.config";
import palette from "./palette/palette.config";

const theme = createTheme({
  palette,
  spacing: 4,
  breakpoints,
  typography,
});

export default theme;
