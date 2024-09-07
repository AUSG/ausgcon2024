"use client";

import Image from "next/image";
import Link from "next/link";
import { sponsorList } from "@/app/constants/sponsor";
import FadeIn from "../FadeIn";

export default function FAQList() {
  return (
    <FadeIn className="flex w-full flex-col items-center justify-center gap-8 pt-10">
      {sponsorList.map((sponsor) => (
        <Link
          key={sponsor.name}
          href={sponsor.url}
          target="_blank"
          className="relative flex aspect-auto h-28 w-48 items-center justify-center rounded-xl transition-transform tablet:h-32 tablet:w-60 tablet:hover:scale-105"
        >
          <Image
            src={sponsor.image}
            alt={sponsor.name}
            fill
            className="object-contain"
          />
        </Link>
      ))}
    </FadeIn>
  );
}
