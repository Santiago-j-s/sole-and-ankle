import { Search, ShoppingBag, ChevronDown, Menu, X } from "react-feather";
import type { IconProps as FeatherIconProps } from "react-feather";

interface IconProps extends FeatherIconProps {
  icon: "Search" | "ShoppingBag" | "ChevronDown" | "Menu" | "X";
  size?: number;
}

const icons = {
  Search: Search,
  ShoppingBag: ShoppingBag,
  ChevronDown: ChevronDown,
  Menu: Menu,
  X: X,
} as const;

const Icon: React.FC<IconProps> = ({ icon, size = 16, ...delegated }) => {
  const SelectedIcon = icons[icon];

  return <SelectedIcon size={size} {...delegated}></SelectedIcon>;
};

export default Icon;
