import type { FooterConfigType } from "@/types/configTypes";

import {
  FacebookIcon,
  GithubIcon,
  Headset,
  Mail,
  MapPin,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

import { Logo } from "@/components/global";

export const footerConfig: FooterConfigType = {
  Logo,
  summary: `Full Stack Next.js application involving 3 systems - POS,
              Online-Store & Inventory Management System.`,
  contacts: [
    { label: "+91 98765 43210", Icon: Headset },
    { label: "office@stockify.com", Icon: Mail },
    {
      label:
        "18 Campbell Building, Yellow Dale Rd, Stratford, London, UK - ST3 8EH",
      Icon: MapPin,
    },
  ],
  navigationLinks: [
    {
      title: "Getting Started",
      links: [
        { name: "Introduction", path: "/introduction" },
        { name: "Documentation", path: "/docs" },
        { name: "Usage", path: "/usage" },
        { name: "Global", path: "/global" },
        { name: "API", path: "/api-docs" },
        { name: "Blogs", path: "/blogs" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about-us" },
        { name: "Careers", path: "/careers" },
        { name: "Community", path: "/community" },
        { name: "Customers", path: "/customers" },
        { name: "Contact Us", path: "/contact-us" },
      ],
    },
    {
      title: "Partner",
      links: [
        { name: "For Individuals", path: "/individuals" },
        { name: "For Freelancers", path: "/freelancers" },
        { name: "For Teams", path: "/teams" },
        { name: "For Enterprises", path: "/Enterprises" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Support", path: "/support" },
        { name: "Security", path: "/security" },
        { name: "Help Center", path: "/help-center" },
        { name: "Preferences", path: "/preferences" },
        { name: "privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Use", path: "/terms-conditions" },
      ],
    },
  ],
  policies: [
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/Cookie-policy" },
  ],
  mediaLinks: [
    { Icon: FacebookIcon, href: "#" },
    { Icon: GithubIcon, href: "#" },
    { Icon: TwitterIcon, href: "#" },
    { Icon: YoutubeIcon, href: "#" },
  ],
};
