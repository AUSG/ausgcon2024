"use client";

import { faqList } from "@/app/constants/faq";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FadeIn from "../FadeIn";

export default function FAQList() {
  return (
    <FadeIn className="flex w-full justify-center px-4 pt-10">
      <div className="w-full divide-y divide-white/5 rounded-xl bg-white/20">
        {faqList.map((faq) => (
          <Disclosure
            key={faq.question}
            defaultOpen={true}
            as="div"
            className="p-6"
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                {faq.question}
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 whitespace-pre-wrap text-sm/5 text-white/70">
              {faq.answer}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </FadeIn>
  );
}
