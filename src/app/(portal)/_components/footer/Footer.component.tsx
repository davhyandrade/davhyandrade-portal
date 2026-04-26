import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Link, Stack, Typography } from '@mui/material';

import {
  EMAIL_URL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from '@/shared/constants/links.constants';

import { items } from './Footer.config';

function Footer() {
  return (
    <Stack
      component="footer"
      alignItems="center"
      paddingY={4}
      bgcolor="background.default"
      borderTop={1}
      borderColor="divider"
    >
      <Stack spacing={4} py={{ xs: 12, sm: 24 }} px={4}>
        <Stack direction="row" flexWrap="wrap" gap={4} justifyContent="center">
          {items.map(item => (
            <Link
              variant="body2"
              key={item.label}
              href={item.href}
              rel="noopener noreferrer"
              color="textSecondary"
            >
              {item.label}
            </Link>
          ))}
        </Stack>

        <Typography variant="caption" color="text.secondary" textAlign="center">
          Meu Portfólio &copy; 2022 - {new Date().getFullYear()}. Todos os
          direitos reservados.
        </Typography>

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

          <IconButton href={EMAIL_URL} color="info" data-testid="email-button">
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
