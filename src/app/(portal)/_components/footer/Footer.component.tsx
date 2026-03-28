import { IconButton, Link, Stack, Typography } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

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
          Meu Portfólio &copy; {new Date().getFullYear()} - 2022. Todos os
          direitos reservados.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton href={LINKEDIN_PROFILE_URL} color="info">
            <LinkedInIcon fontSize="small" />
          </IconButton>

          <IconButton href={GITHUB_PROFILE_URL} color="info">
            <GitHubIcon fontSize="small" />
          </IconButton>

          <IconButton href={EMAIL_URL} color="info">
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
