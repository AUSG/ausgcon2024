import { Button } from "@headlessui/react";
import { UMOH_LINK } from "../constants/link";

export default function NetworkButton() {
  return (
    <Button
      onClick={() => {
        window.open(UMOH_LINK, "_blank");
      }}
      className="inline-flex items-center gap-2 rounded-md bg-purple-500 px-6 py-3 text-xl/6 font-semibold text-white shadow-inner shadow-white/10 data-[hover]:bg-purple-600 tablet:px-9 tablet:py-6 tablet:text-4xl/6"
    >
      참가자 네트워킹
    </Button>
  );
}
