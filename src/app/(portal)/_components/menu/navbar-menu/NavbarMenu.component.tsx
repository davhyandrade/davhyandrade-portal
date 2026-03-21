import { useState } from "react";

import { Button, Stack } from "@mui/material";

import Dropdown from "./dropdown/Dropdown.component";
import { menuItems } from "../Menu.config";

function NavbarMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    itemLabel: string,
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveItem(itemLabel);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveItem(null);
  };

  return (
    <Stack component="nav" direction="row" spacing={4}>
      {menuItems.map((item) => {
        const isOpen = !!anchorEl && activeItem === item.label;

        return (
          <Stack direction="row" key={item.label}>
            <Button
              variant={item.variant || "text"}
              startIcon={item.icon}
              href={item.href}
              color="info"
              onClick={(event) =>
                item.dropdownItems && handleClick(event, item.label)
              }
              sx={{
                ...(isOpen && {
                  border: 2,
                  borderColor: "background.paper",
                  color: "info.dark",
                }),
              }}
            >
              {item.label}
            </Button>

            {item.dropdownItems && (
              <Dropdown
                anchorEl={anchorEl}
                isOpen={isOpen}
                onClose={handleClose}
                items={item.dropdownItems}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
}

export default NavbarMenu;
