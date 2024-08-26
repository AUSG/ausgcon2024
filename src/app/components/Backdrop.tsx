"use client";

import { cn } from "@/app/lib/utils";
import { useInView } from "react-intersection-observer";

export default function Backdrop() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <>
      <div
        className={cn(
          "bg-gray-4000/50 fixed left-0 top-0 -z-10 flex w-full items-center justify-center transition-all duration-500 h-screen-dvh",
          inView ? "bg-slate-500/60" : "bg-gray-400/0"
        )}
      />
      <div ref={ref} className="h-10" />
    </>
  );
}
