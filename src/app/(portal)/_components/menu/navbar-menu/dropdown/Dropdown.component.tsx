import Link from "next/link";	

import { Menu, MenuItem } from "@mui/material";	

import type { DropdownProps } from "./Dropdown.types";	

function Dropdown({ anchorEl, isOpen, onClose, items }: DropdownProps) {	
  return (	
    <Menu	
      anchorEl={anchorEl}	
      open={isOpen}	
      onClose={onClose}	
      slotProps={{	
        paper: {	
          sx: {	
            marginTop: 3,	
            minWidth: 200,	
            border: 1,	
            borderColor: "divider",	
            borderRadius: 4,	
          },	
        },	
        list: {	
          sx: {	
            paddingTop: 3,	
            paddingBottom: 0,	
          },	
        },	
      }}	
    >	
      {items.map((item) => (	
        <MenuItem	
          key={item.label}	
          component={Link}	
          onClick={onClose}	
          href={item.href}	
          dense	
          sx={{	
            bgcolor: "background.default",	
            paddingY: 2,	
            borderTop: 1,	
            borderColor: "divider",	
            transition: "color 0.3s",	
            color: "text.secondary",	
            "&:hover": {	
              color: "text.primary",	
            },	
          }}	
        >	
          {item.label}	
        </MenuItem>	
      ))}	
    </Menu>	
  );	
}	

export default Dropdown;	
