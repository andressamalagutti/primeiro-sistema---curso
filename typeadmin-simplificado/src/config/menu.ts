import { Box, User } from "lucide-react";

interface MenuItemProps {
  title: string;
  icon: React.ComponentType<any>;
  href: string;
  disabled?: boolean;
}

export const adminMenu: MenuItemProps[] = [
  { title: "Usuários", icon: User, href: "/usuarios" },
];

export const menu: MenuItemProps[] = [{ title: "", icon: Box, href: "/" }];
