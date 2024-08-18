import { MouseEventHandler, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "../lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  distance?: 0 | 20 | 30 | 60 | 80;
  duration?: {
    in?: number;
    out?: number;
  };
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function FadeIn({
  children,
  className,
  distance = 20,
  duration,
  onClick,
}: FadeInProps) {
  const variants: Variants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration?.in ?? 0.4 },
      },
      hidden: {
        opacity: 0,
        y: `${distance}px`,
        transition: { duration: duration?.out ?? 0.25 },
      },
    }),
    [distance, duration]
  );

  const getTransformClass = (distance: FadeInProps["distance"]) => {
    switch (distance) {
      case 0:
        return "translate-y-0";
      case 20:
        return "translate-y-[20px]";
      case 30:
        return "translate-y-[30px]";
      case 60:
        return "translate-y-[60px]";
      case 80:
        return "translate-y-[80px]";
      default:
        return null;
    }
  };

  const transformClass = getTransformClass(distance);

  return (
    <motion.div
      className={cn("opacity-0", transformClass, className)}
      variants={variants}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
