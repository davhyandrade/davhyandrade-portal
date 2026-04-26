import type { LinkProps } from '@mui/material';

import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

function Link({ href, children, ...rest }: LinkProps) {
  return (
    <MuiLink component={NextLink} href={href} {...rest}>
      {children}
    </MuiLink>
  );
}

export default Link;
