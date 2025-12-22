import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconVariant = "primary" | "secondary" | "muted" | "accent" | "foreground";
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconAnimation = "none" | "pulse" | "spin" | "bounce";
export type IconHover = "none" | "scale" | "glow" | "lift";

interface IconProps {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: IconSize;
  animation?: IconAnimation;
  hover?: IconHover;
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

const animationStyles: Record<IconAnimation, string> = {
  none: "",
  pulse: "animate-pulse",
  spin: "animate-spin",
  bounce: "animate-bounce",
};

const hoverStyles: Record<IconHover, string> = {
  none: "",
  scale: "transition-transform duration-200 hover:scale-125",
  glow: "transition-all duration-200 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]",
  lift: "transition-transform duration-200 hover:-translate-y-0.5",
};

export const Icon = ({ 
  icon: IconComponent, 
  variant = "primary", 
  size = "md",
  animation = "none",
  hover = "none",
  className 
}: IconProps) => {
  return (
    <IconComponent 
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        animationStyles[animation],
        hoverStyles[hover],
        className
      )} 
    />
  );
};

export default Icon;
