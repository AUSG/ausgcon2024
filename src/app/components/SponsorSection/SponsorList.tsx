"use client";

import Image from "next/image";
import Link from "next/link";
import { sponsorList } from "@/app/constants/sponsor";
import FadeIn from "../FadeIn";

export default function FAQList() {
  return (
    <FadeIn className="flex w-full justify-center px-4 pt-10">
      <div className="grid w-full grid-cols-1 gap-8 tablet:grid-cols-2">
        {sponsorList.map((sponsor) => (
          <Link
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            className="relative flex h-20 items-center justify-center rounded-xl bg-white/20 transition-colors hover:bg-white/30"
          >
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              fill
              className="object-contain p-5"
            />
          </Link>
        ))}
      </div>
    </FadeIn>
  );
}
