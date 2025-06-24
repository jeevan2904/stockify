import { LucideIcon } from "lucide-react";
import { FC } from "react";

export type FooterConfigType = {
  Logo: FC;
  summary: string;
  contacts: { label: string; Icon: LucideIcon }[];
  navigationLinks: { title: string; links: { name: string; path: string }[] }[];
  policies: { label: string; src: string }[];
  mediaLinks: { Icon: LucideIcon; href: string }[];
};
