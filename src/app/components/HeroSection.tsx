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
      className="relative h-screen-dvh"
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
          className="whitespace-pre-wrap text-center text-2xl font-semibold text-primary md:text-6xl"
          distance={30}
          duration={{ in: 0.8 }}
        >
          {"AUSG\nConference 2024"}
        </FadeIn>
        <FadeIn distance={60} duration={{ in: 0.8 }}>
          <div className="flex justify-center gap-8 whitespace-pre-wrap text-lg font-semibold text-primary md:text-2xl">
            <span>2024.09.21</span>
            <span>AWS 센터필드 18층</span>
          </div>
        </FadeIn>
        <FadeIn
          className="w-full text-center"
          distance={80}
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
