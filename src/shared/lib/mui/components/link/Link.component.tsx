"use client";

import NextLink from "next/link";

import { Link as MuiLink } from "@mui/material";
import type { LinkProps } from "@mui/material";

function Link({ href, children, ...rest }: LinkProps) {
  return (
    <MuiLink component={NextLink} href={href} {...rest}>
      {children}
    </MuiLink>
  );
}

export default Link;
