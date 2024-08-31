"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
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
          <div className="relative aspect-[7/1] w-80 md:w-[40rem]">
            <Image src="/logo.png" alt="AUSG Conference 2024" fill />
          </div>
        </FadeIn>
        <FadeIn distance={60} duration={{ in: 0.8 }}>
          <div className="font-bagel-fat-one flex justify-center gap-8 whitespace-pre-wrap text-lg font-semibold text-primary md:text-2xl">
            <span className="flex items-center gap-2">
              <CalendarIcon className="h-6 w-6" />
              2024.09.21
            </span>
            <span className="flex items-center gap-2">
              <MapPinIcon className="h-6 w-6" />
              AWS 센터필드 18층
            </span>
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
