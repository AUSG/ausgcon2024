"use client";

import { cn } from "@/app/lib/utils";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../SectionTitle";
import SectionList from "./SectionList";

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export default function SessionSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <div
        className={cn(
          "bg-gray-4000/50 fixed left-0 top-0 -z-10 flex w-full items-center justify-center transition-all duration-500 h-screen-dvh",
          inView ? "bg-slate-500/60" : "bg-gray-400/0"
        )}
      />
      <motion.section
        className="relative"
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        <div className="container m-auto flex flex-col items-center">
          <SectionTitle
            title="Program"
            description={`AUSGCON의 세션을 \n소개합니다`}
          />
          <SectionList />
        </div>
      </motion.section>
    </>
  );
}
