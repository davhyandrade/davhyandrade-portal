import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@/shared/lib/mui/components/link';

import type { MenuItemWithDropdownProps } from './MenuItemWithDropdown.types';

function MenuItemWithDropdown({ item, onClose }: MenuItemWithDropdownProps) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        width: '100%',
        bgcolor: 'transparent',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="info" />}
        sx={{
          paddingX: 5,
          paddingY: 2,
          minHeight: 'auto',
          '& .MuiAccordionSummary-content': {
            margin: 0,
            flexGrow: 0,
          },
        }}
      >
        <Typography color="info.main">{item.label}</Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          padding: 0,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Stack paddingY={2}>
          {item.dropdownItems.map(subItem => (
            <Link
              key={subItem.label}
              href={subItem.href}
              color="info"
              onClick={onClose}
              sx={{ paddingX: 5, paddingY: 2 }}
            >
              {subItem.label}
            </Link>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenuItemWithDropdown;
