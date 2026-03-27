import type { DropdownItem } from "../../Header.types";

export interface DropdownProps {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  onClose: () => void;
  items: DropdownItem[];
}
