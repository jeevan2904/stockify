import type { ISidebarItem } from "@/types";

import {
  BaggageClaim,
  BarChart4,
  Cable,
  CircleDollarSign,
  FolderTree,
  Home,
  Presentation,
  Settings,
  Users,
} from "lucide-react";

export const sidebarConfig: ISidebarItem[] = [
  { title: "Dashboard", href: "/dashboard", Icon: Home, isDropdown: false },
  {
    title: "People",
    Icon: Users,
    isDropdown: true,
    dropdownMenu: [
      { label: "Users", href: "/all-users" },
      { label: "Roles", href: "/roles" },
    ],
  },
  {
    title: "Inventory",
    Icon: BaggageClaim,
    isDropdown: true,
    dropdownMenu: [
      { label: "Products", href: "/products" },
      { label: "Categories", href: "/categories" },
      { label: "Brands", href: "/brands" },
      { label: "Units", href: "/units" },
      { label: "Warehouses", href: "/warehouses" },
      { label: "Suppliers", href: "/suppliers" },
    ],
  },
  {
    title: "Sales",
    Icon: CircleDollarSign,
    isDropdown: true,
    dropdownMenu: [
      { label: "All Sales", href: "/all-sales" },
      { label: "Payments", href: "/payments" },
      { label: "Quotations", href: "/quotations" },
      { label: "Customers", href: "/customers" },
    ],
  },
  {
    title: "POS",
    href: "/pos",
    Icon: Presentation,
    isDropdown: false,
  },
  {
    title: "Stock",
    Icon: FolderTree,
    isDropdown: true,
    dropdownMenu: [
      { label: "Stock Transfers", href: "/stock-transfers" },
      { label: "Stock Adjustments", href: "/stock-adjustments" },
    ],
  },
  {
    title: "Integrations",
    href: "/integrations",
    Icon: Cable,
    isDropdown: false,
  },
  {
    title: "Settings",
    href: "/settings",
    Icon: Settings,
    isDropdown: false,
  },
  {
    title: "Reports",
    href: "/reports",
    Icon: BarChart4,
    isDropdown: false,
  },
];
