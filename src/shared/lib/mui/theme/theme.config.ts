import { createTheme } from '@mui/material/styles';

import breakpoints from './breakpoints/breakpoints.config';
import typography from './typography/typography.config';
import palette from './palette/palette.config';

import { MuiLink } from './components/link/link.config';
import { MuiTypography } from './components/typography/typography.config';
import { MuiButton } from './components/button/button.config';

const theme = createTheme({
  cssVariables: true,
  spacing: 4,
  breakpoints,
  typography,
  palette,
  components: {
    MuiLink,
    MuiTypography,
    MuiButton,
  },
});

export default theme;
