import { Divider, Stack } from "@mui/material";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";

import {
  GALLERY_URL,
  LINKEDIN_PROFILE_URL,
} from "@/shared/constants/links.constants";

import type { MenuItem } from "./navbar-menu/NavbarMenu.types";

export const menuItems: MenuItem[] = [
  { label: "Projetos", href: "/#projects" },
  { label: "Galeria", href: GALLERY_URL },
  {
    label: "Design",
    dropdownItems: [
      { label: "Social Media", href: "/design/social-media" },
      {
        label: "Manipulações de Imagens",
        href: "/design/image-manipulation",
      },
      { label: "Esportivos", href: "/design/sporting" },
    ],
  },
  {
    label: "Contato",
    variant: "outlined",
    icon: (
      <Stack direction="row" spacing={2} alignItems="center">
        <PhoneInTalkRoundedIcon fontSize="small" />

        <Divider orientation="vertical" flexItem sx={{ borderWidth: 0.5 }} />
      </Stack>
    ),
    dropdownItems: [{ label: "LinkedIn", href: LINKEDIN_PROFILE_URL }],
  },
];
