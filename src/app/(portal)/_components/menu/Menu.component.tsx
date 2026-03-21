"use client";

import Image from "next/image";

import { AppBar, Container, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavbarMenu from "./navbar-menu/NavbarMenu.component";
import MenuMobile from "./menu-mobile/MenuMobile.component";

function MenuComponent() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const logoSize = isMobile ? 40 : 54;

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Stack
        width="100%"
        alignItems="center"
        justifyContent="center"
        paddingX={{ xs: 4, sm: 6, md: 12 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 0 },
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            paddingY={{ xs: 6, sm: 14 }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 2, sm: 6 }}
              alignItems="center"
            >
              <Stack
                bgcolor="background.paper"
                borderRadius="50%"
                padding={1}
                border={1}
                borderColor="divider"
              >
                <Image
                  src="/images/logo.svg"
                  alt="Logotipo"
                  width={logoSize}
                  height={logoSize}
                />
              </Stack>

              <Typography
                variant={isMobile ? "h6" : "h5"}
                color="text.primary"
                fontFamily="var(--font-cookie)"
                lineHeight={1}
                letterSpacing={1}
              >
                Davhy Andrade
              </Typography>
            </Stack>

            {isMobile ? <MenuMobile /> : <NavbarMenu />}
          </Stack>
        </Container>
      </Stack>
    </AppBar>
  );
}

export default MenuComponent;
