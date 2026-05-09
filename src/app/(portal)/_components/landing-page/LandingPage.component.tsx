'use client';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { ReactTyped } from 'react-typed';

import Header from '@/app/(portal)/_components/header/Header.component';
import {
  EMAIL_URL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from '@/shared/constants/links.constants';

function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        backgroundImage:
          'url(https://i.postimg.cc/rpWVVWnC/background-landing-page.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />

      <Container>
        <Stack alignItems="start" spacing={6}>
          <Stack alignItems="start">
            <Typography variant="h4" color="info">
              Olá, meu nome é
            </Typography>

            <Typography variant="h2" color="info" fontWeight={700}>
              Davhy Andrade
            </Typography>

            <Typography variant="h4" color="info">
              e sou{' '}
              <Typography
                component="span"
                fontSize="inherit"
                color="primary.main"
              >
                <ReactTyped
                  strings={[
                    'Desenvolvedor Web',
                    'Designer Digital',
                    'Fotógrafo',
                  ]}
                  typeSpeed={100}
                  backSpeed={100}
                  backDelay={1000}
                  loop
                />
              </Typography>
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="contained">Contratar-me</Button>

              <Button variant="outlined">Ver Projetos</Button>
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton
                href={LINKEDIN_PROFILE_URL}
                color="info"
                data-testid="linkedin-button"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                href={GITHUB_PROFILE_URL}
                color="info"
                data-testid="github-button"
              >
                <GitHubIcon fontSize="small" />
              </IconButton>

              <IconButton
                href={EMAIL_URL}
                color="info"
                data-testid="email-button"
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default LandingPage;
