"use client";

import Image from "next/image";

import { AppBar, Container, Stack, Typography } from "@mui/material";

import NavbarMenu from "./navbar-menu/NavbarMenu.component";

function MenuComponent() {
  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Stack
        width="100%"
        alignItems="center"
        justifyContent="center"
        paddingX={12}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: 0,
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            paddingY={14}
          >
            <Stack direction="row" spacing={6} alignItems="center">
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
                  width={54}
                  height={54}
                />
              </Stack>

              <Typography
                variant="h5"
                color="text.primary"
                fontFamily="var(--font-cookie)"
                lineHeight={1}
                letterSpacing={1}
              >
                Davhy Andrade
              </Typography>
            </Stack>

            <NavbarMenu />
          </Stack>
        </Container>
      </Stack>
    </AppBar>
  );
}

export default MenuComponent;
