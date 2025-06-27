import { LucideIcon } from "lucide-react";

export interface ISidebarItem {
  title: string;
  href?: string;
  Icon: LucideIcon;
  isDropdown: boolean;
  dropdownMenu?: { label: string; href: string }[];
}
