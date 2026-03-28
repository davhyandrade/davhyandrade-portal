import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Drawer, IconButton, Stack } from '@mui/material';

import MenuItemWithDropdown from './menu-item-with-dropdown/MenuItemWithDropdown.component';

import { menuItems } from '@/app/(portal)/_components/header/Header.config';
import { StyledLink } from './MenuDrawer.styles';
import type { MenuDrawerProps } from './MenuDrawer.types';

function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            bgcolor: 'background.default',
            borderBottom: 1,
            borderColor: 'divider',
          },
        },
      }}
    >
      <Stack padding={4} position="relative">
        <Stack padding={4} position="absolute" top={0} right={0}>
          <IconButton color="info" onClick={onClose}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>

        <Stack component="nav" paddingY={6} spacing={1}>
          {menuItems.map(item => {
            const hasDropdown = Array.isArray(item.dropdownItems);

            return (
              <Stack
                key={item.label}
                alignItems="center"
                justifyContent="center"
                width="100%"
                spacing={2}
              >
                {hasDropdown ? (
                  <MenuItemWithDropdown
                    item={{
                      label: item.label,
                      dropdownItems: item.dropdownItems!,
                    }}
                    onClose={onClose}
                  />
                ) : (
                  <StyledLink href={item.href} onClick={onClose}>
                    {item.label}
                  </StyledLink>
                )}
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default MenuDrawer;
