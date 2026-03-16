import type { Components, Theme } from "@mui/material/styles";

export const MuiTypography: Components<Theme>["MuiTypography"] = {
  variants: [
    {
      props: { variant: "body1" },
      style: {
        fontSize: 16,
      },
    },
    {
      props: { variant: "body2" },
      style: {
        fontSize: 14,
      },
    },
    {
      props: { variant: "caption" },
      style: {
        fontSize: 13,
      },
    },
  ],
};
