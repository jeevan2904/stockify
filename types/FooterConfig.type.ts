import { FC } from "react";
import { LucideIcon } from "lucide-react";

export type FooterConfigType = {
  Logo: FC;
  summary: string;
  contacts: { Icon: LucideIcon; label: string }[];
  navigationLinks: { title: string; links: { name: string; path: string }[] }[];
  policies: { label: string; path: string }[];
  mediaLinks: { Icon: LucideIcon; href: string }[];
};
