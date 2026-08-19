import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@tengkuawal",
    icon: Icons.gitHub,
    link: "https://github.com/tengkuawal",
  },

  {
    name: "Twitter",
    username: "@namanbarkiya",
    icon: Icons.twitter,
    link: "https://twitter.com/namanbarkiya",
  },
  {
    name: "Gmail",
    username: "tngkuawluddinfhri",
    icon: Icons.gmail,
    link: "mailto:tngkuawluddinfhri@gmail.com",
  },
];
