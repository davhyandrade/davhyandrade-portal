import { DropdownItem } from "../NavbarMenu.types";

export interface DropdownProps {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  onClose: () => void;
  items: DropdownItem[];
}
