import type { Components, Theme } from "@mui/material/styles";

export const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: 16,
      textTransform: "none",
      borderRadius: theme.spacing(3),
      padding: theme.spacing(1, 6),
      transition: "color 0.3s, border-color 0.3s",
    }),
  },
  variants: [
    {
      props: { variant: "text" },
      style: {
        border: "2px solid transparent",

        "&:hover": {
          borderColor: "currentColor",
        },
      },
    },
    {
      props: { variant: "outlined" },
      style: {
        border: "2px solid",
      },
    },
  ],
};
