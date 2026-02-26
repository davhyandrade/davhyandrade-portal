import type { PaletteOptions } from "@mui/material/styles";

import { orange } from "@mui/material/colors";

const palette: PaletteOptions = {
  background: {
    default: "#1A1A1A",
    paper: "#242424",
  },
  text: {
    primary: "#e5e7eb",
    secondary: "#a5a5a5ff",
    disabled: "#686868ff",
  },
  secondary: {
    main: orange[800],
    dark: orange[900],
    light: orange[300],
    contrastText: "#242424",
  },
  primary: {
    main: "#90caf9",
    light: "#e3f2fd1c",
    dark: "#42a5f5",
    contrastText: "#242424",
  },
};

export default palette;
