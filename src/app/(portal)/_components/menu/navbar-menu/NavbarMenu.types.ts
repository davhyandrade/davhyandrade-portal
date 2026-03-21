export interface DropdownItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href?: string;
  variant?: "text" | "outlined" | "contained";
  icon?: React.ReactNode;
  dropdownItems?: DropdownItem[];
}
