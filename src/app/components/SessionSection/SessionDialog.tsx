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
      <DialogBackdrop transition className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="data-[closed]:transform-[scale(95%)] w-full max-w-2xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-2xl font-medium text-white">
              {session.title}
            </DialogTitle>
            <p className="mt-2 whitespace-pre-wrap text-sm/6 text-white">
              {session.description}
            </p>
            {session.speaker && (
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src={session.speaker.image}
                  alt={session.speaker.name}
                  width={40}
                  height={40}
                  className="aspect-square rounded-full object-cover"
                />
                <div>
                  <p className="text-sm/6 text-white/80">
                    {session.speaker.name}
                  </p>
                  <p className="text-sm/6 text-white/80">
                    {session.speaker.title}
                  </p>
                </div>
              </div>
            )}
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
