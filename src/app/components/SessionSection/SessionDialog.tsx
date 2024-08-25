import Image from "next/image";
import { sessionList } from "@/app/constants/session";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SessionDialog({
  open,
  onClose,
  session,
}: {
  open: boolean;
  onClose: () => void;
  session?: (typeof sessionList)[number]["sessions"][number];
}) {
  if (!session) return null;

  return (
    <Dialog
      open={open}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={onClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30 transition-colors duration-300" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="data-[closed]:transform-[scale(95%)] w-full max-w-2xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              {session.title}
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-white/50">
              {session.description}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <Image
                src={session.speakerImage}
                alt={session.speaker}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm/6 text-white/50">{session.speaker}</p>
                <p className="text-sm/6 text-white/50">
                  {session.speakerDescription}
                </p>
              </div>
            </div>
            {/* X */}
            <button onClick={onClose} className="absolute right-4 top-4">
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
