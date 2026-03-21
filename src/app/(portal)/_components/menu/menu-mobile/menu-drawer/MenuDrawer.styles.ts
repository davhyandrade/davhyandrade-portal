import Link from "@/shared/lib/mui/components/link";
import { alpha, styled } from "@mui/material/styles";

export const StyledLink = styled(Link)(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  color: theme.palette.text.primary,
  padding: theme.spacing(2, 5),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short,
  }),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));
