import type { FooterConfigType } from "@/types";

import {
  FacebookIcon,
  GithubIcon,
  Headset,
  InstagramIcon,
  Mail,
  MapPin,
  TwitterIcon,
} from "lucide-react";

import { Logo } from "@/components/global";

export const footerConfig: FooterConfigType = {
  Logo,
  summary: `Full Stack Next.js application involving 3 systems - POS, Online Store & Inventory Management`,
  contacts: [
    { label: "+91 98765 43210", Icon: Headset },
    { label: "office@stockify.com", Icon: Mail },
    {
      label: "9 Green Chappel Road, Manor Park, London, UK - MP3 8EG",
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
        { name: "Contact us", path: "/contact-us" },
      ],
    },
    {
      title: "Partner",
      links: [
        { name: "For Individuals", path: "/individuals" },
        { name: "For freelancers", path: "/freelancers" },
        { name: "For Teams", path: "/teams" },
        { name: "For Enterprises", path: "/enterprises" },
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
    { label: "Terms & Conditions", src: "/terms-conditions" },
    { label: "Privacy Policy", src: "/privacy-policy" },
    { label: "Cookie Policy", src: "/cookie-policy" },
  ],
  mediaLinks: [
    { Icon: FacebookIcon, href: "#" },
    { Icon: TwitterIcon, href: "#" },
    { Icon: GithubIcon, href: "#" },
    { Icon: InstagramIcon, href: "#" },
  ],
};
