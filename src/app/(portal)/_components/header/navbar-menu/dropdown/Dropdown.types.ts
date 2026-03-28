import type { DropdownItem } from '@/app/(portal)/_components/header/Header.types';

export interface DropdownProps {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  onClose: () => void;
  items: DropdownItem[];
}
