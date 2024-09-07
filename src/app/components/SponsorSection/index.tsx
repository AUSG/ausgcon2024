"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../SectionTitle";
import SponsorList from "./SponsorList";

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export default function SponsorSection() {
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
      <div className="container m-auto flex flex-col items-center pt-44">
        <SectionTitle
          title="Sponsor"
          description={`AUSGCON을 후원해주신\n기업을 소개합니다`}
        />
        <SponsorList />
      </div>
    </motion.section>
  );
}
