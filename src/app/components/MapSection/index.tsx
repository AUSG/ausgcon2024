"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../SectionTitle";
import SponsorList from "./MapView";

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export default function MapSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.section
      className="relative"
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container m-auto flex flex-col items-center py-44">
        <SectionTitle
          title="Map"
          description={`AUSGCON 오시는 길`}
        />
        <SponsorList />
      </div>
    </motion.section>
  );
}
