import type { Components, Theme } from "@mui/material/styles";

export const MuiLink: Components<Theme>["MuiLink"] = {
  defaultProps: {
    underline: "none",
  },
  styleOverrides: {
    root: {
      transition: "color 0.3s",
    },
  },
  variants: [
    {
      props: { color: "textSecondary" },
      style: ({ theme }) => ({
        color: theme.palette.text.secondary,

        "&:hover, &:focus": {
          color: theme.palette.text.primary,
        },

        "&:active": {
          color: theme.palette.text.disabled,
        },
      }),
    },
  ],
};
