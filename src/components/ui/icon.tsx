import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconVariant = "primary" | "secondary" | "muted" | "accent" | "foreground";
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IconProps {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: IconSize;
  className?: string;
}

const variantStyles: Record<IconVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
  foreground: "text-foreground",
};

const sizeStyles: Record<IconSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

export const Icon = ({ 
  icon: IconComponent, 
  variant = "primary", 
  size = "md", 
  className 
}: IconProps) => {
  return (
    <IconComponent 
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        className
      )} 
    />
  );
};

export default Icon;
