"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../SectionTitle";
import Contact from "./Contact";

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export default function ContactSection() {
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
          title="Contact"
          description={`궁금한게 있다면 언제든지 질문 받습니다`}
        />
        <Contact />
      </div>
    </motion.section>
  );
}
