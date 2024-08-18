"use client";

import { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 200);
  }, []);

  return (
    <motion.section
      className="h-screen-dvh relative"
      ref={heroRef}
      animate={heroInView && mounted ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-12">
        <FadeIn
          className="text-primary whitespace-pre-wrap text-center text-2xl font-semibold md:text-6xl"
          distance={60}
          duration={{ in: 0.8 }}
        >
          {"AUSGCON 2024\n: Try-Catch"}
        </FadeIn>
        <FadeIn
          className="w-full text-center"
          distance={60}
          duration={{ in: 0.8 }}
        >
          <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 data-[hover]:bg-gray-600">
            티켓 구매
          </Button>
        </FadeIn>
      </div>
    </motion.section>
  );
}
