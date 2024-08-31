"use client";

import { cn } from "@/app/lib/utils";
import { useInView } from "react-intersection-observer";

export default function Backdrop({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <div
        className={cn(
          "bg-gray-4000/50 fixed left-0 top-0 -z-10 flex h-full w-full items-center justify-center transition-all duration-500",
          inView ? "bg-slate-500/60" : "bg-gray-400/0"
        )}
      />
      <div ref={ref}>{children}</div>
    </>
  );
}
