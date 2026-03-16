import { createTheme } from "@mui/material/styles";

import breakpoints from "./breakpoints/breakpoints.config";
import typography from "./typography/typography.config";

import { MuiLink } from "./components/link/link.config";

const theme = createTheme({
  spacing: 4,
  breakpoints,
  typography,
  components: {
    MuiLink,
  },
});

export default theme;
