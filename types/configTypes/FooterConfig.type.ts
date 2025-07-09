import { FC } from "react";
import { LucideIcon } from "lucide-react";

export type FooterConfigType = {
  Logo: FC;
  summary: string;
  contacts: { label: string; Icon: LucideIcon }[];
  navigationLinks: {
    title: string;
    links: { name: string; path: string }[];
  }[];
  policies: { name: string; path: string }[];
  mediaLinks: { Icon: LucideIcon; href: string }[];
};
