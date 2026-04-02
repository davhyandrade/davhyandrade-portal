import { render, screen } from '@testing-library/react';

import {
  EMAIL_URL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from '@/shared/constants/links.constants';

import Footer from '../Footer.component';

jest.useFakeTimers().setSystemTime(new Date('2026-04-01'));

it('renders the footer correctly', () => {
  render(<Footer />);

  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

it('renders the contact link correctly', () => {
  render(<Footer />);

  expect(screen.getByRole('link', { name: 'Contato' })).toBeInTheDocument();
});

it('renders the about link correctly', () => {
  render(<Footer />);

  expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument();
});

it('renders the projects link correctly', () => {
  render(<Footer />);

  expect(screen.getByRole('link', { name: 'Projetos' })).toBeInTheDocument();
});

it('renders the initial screen link correctly', () => {
  render(<Footer />);

  expect(
    screen.getByRole('link', { name: 'Tela Inicial' }),
  ).toBeInTheDocument();
});

it('renders the github button correctly', () => {
  render(<Footer />);

  expect(screen.getByTestId('github-button')).toHaveAttribute(
    'href',
    GITHUB_PROFILE_URL,
  );
});

it('renders the linkedin button correctly', () => {
  render(<Footer />);

  expect(screen.getByTestId('linkedin-button')).toHaveAttribute(
    'href',
    LINKEDIN_PROFILE_URL,
  );
});

it('renders the email button correctly', () => {
  render(<Footer />);

  expect(screen.getByTestId('email-button')).toHaveAttribute('href', EMAIL_URL);
});

it('renders the correct copyright year', () => {
  render(<Footer />);

  expect(
    screen.getByText(
      'Meu Portfólio © 2022 - 2026. Todos os direitos reservados.',
    ),
  ).toBeInTheDocument();
});
