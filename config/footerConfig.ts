import type { FooterConfigType } from "@/types";

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
  summary: `Full Stack Next.js application involving 3 systems - Online Store,
              POS & Inventory Management System.`,
  contacts: [
    {
      Icon: Headset,
      label: "+91 98765 43210",
    },
    {
      Icon: Mail,
      label: "support@stockify.com",
    },
    {
      Icon: MapPin,
      label: "23 Green Chappell Rd, Stratford, London, UK - IG3 8BD",
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
        { name: "For individuals", path: "/individuals" },
        { name: "For Freelancers", path: "/freelancers" },
        { name: "For Teams", path: "/teams" },
        { name: "For enterprises", path: "/enterprises" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Support", path: "/support" },
        { name: "Security", path: "/security" },
        { name: "Help Center", path: "/help-center" },
        { name: "Preferences", path: "/preferences" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Use", path: "/terms-conditions" },
      ],
    },
  ],
  policies: [
    { label: "Terms & Conditions", path: "/terms-conditions" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Cookie Policy", path: "/cookie-policy" },
  ],
  mediaLinks: [
    {
      Icon: FacebookIcon,
      href: "#",
    },
    {
      Icon: GithubIcon,
      href: "#",
    },
    {
      Icon: TwitterIcon,
      href: "#",
    },
    {
      Icon: YoutubeIcon,
      href: "#",
    },
  ],
};
