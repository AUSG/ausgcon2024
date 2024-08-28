"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../SectionTitle";
import FAQList from "./FAQList";

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export default function FAQSection() {
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
        <SectionTitle title="FAQ" description={`자주 묻는 질문을 모았습니다`} />
        <FAQList />
      </div>
    </motion.section>
  );
}
