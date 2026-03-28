'use client';

import { useState } from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

import MenuDrawer from './menu-drawer/MenuDrawer.component';

function MenuMobile() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <IconButton color="info" onClick={() => setDrawerOpen(true)}>
        <MenuRoundedIcon fontSize="large" />
      </IconButton>

      <MenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

export default MenuMobile;
