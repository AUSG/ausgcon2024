"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../SectionTitle";
import SectionList from "./SessionList";

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
    <motion.section
      className="relative"
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container m-auto flex flex-col items-center px-5 pb-16">
        <SectionTitle
          title="Program"
          description={`AUSGCON의 세션을 \n소개합니다`}
        />
        <SectionList />
      </div>
    </motion.section>
  );
}
