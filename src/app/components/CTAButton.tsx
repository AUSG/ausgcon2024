import { Button } from "@headlessui/react";
import {
  EVENT_END_TIMESTAMP,
  TICKET_LINK,
  TICKET_OPEN_TIMESTAMP,
} from "../constants/ticket";

export default function CTAButton() {
  const statusText = {
    before: "오픈 전",
    sale: "참가하기",
    soldout: "매진",
    end: "종료",
  };

  const getEventStatus = () => {
    const today = Date.now();
    if (today < TICKET_OPEN_TIMESTAMP) {
      return "before";
    } else if (today < EVENT_END_TIMESTAMP && today > TICKET_OPEN_TIMESTAMP) {
      return "sale";
    } else if (
      today < EVENT_END_TIMESTAMP &&
      process.env.NEXT_PUBLIC_TICKET_SOLDOUT === "true"
    ) {
      return "soldout";
    } else {
      return "end";
    }
  };

  return (
    <Button
      onClick={() => {
        window.open(TICKET_LINK, "_blank");
      }}
      disabled={getEventStatus() === "soldout" || getEventStatus() === "end"}
      className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-6 py-3 text-xl/6 font-semibold text-white shadow-inner shadow-white/10 data-[hover]:bg-gray-600 tablet:px-9 tablet:py-6 tablet:text-4xl/6"
    >
      {statusText[getEventStatus()]}
    </Button>
  );
}
