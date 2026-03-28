import type { Components, Theme } from '@mui/material/styles';

export const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: 16,
      lineHeight: 1.4,
      textTransform: 'none',
      borderRadius: theme.spacing(4),
      padding: theme.spacing(1.5, 5),
      transition: 'color 0.3s, border-color 0.3s',
    }),
  },
  variants: [
    {
      props: { variant: 'text' },
      style: {
        border: '2px solid transparent',

        '&:hover': {
          borderColor: 'currentColor',
        },
      },
    },
    {
      props: { variant: 'outlined' },
      style: {
        border: '2px solid',
      },
    },
  ],
};
