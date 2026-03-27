export interface MenuItemWithDropdownProps {
  item: {
    label: string;
    dropdownItems: {
      label: string;
      href: string;
    }[];
  };
  onClose: () => void;
}
