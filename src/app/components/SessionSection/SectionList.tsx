"use client";

import { useState } from "react";
import Image from "next/image";
import { sessionList, sessionTimeLabelLookup } from "@/app/constants/session";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import FadeIn from "../FadeIn";
import SessionDialog from "./SessionDialog";

export default function SectionList() {
  const [isSessionDialogOpen, setIsSessionDialogOpen] = useState(false);
  const [selectedSession, setSelectedSession] =
    useState<(typeof sessionList)[number]["sessions"][number]>();

  return (
    <FadeIn className="flex h-screen w-full justify-center px-4 pt-10">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex justify-center gap-4">
            {sessionList.map(({ track }) => (
              <Tab
                key={track}
                className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-white/5 data-[selected]:bg-white/10 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {track}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {sessionList.map(({ track, sessions }) => (
              <TabPanel
                key={track}
                className="rounded-xl bg-white/20 p-3 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div>
                  {sessions.map((session) => (
                    <div key={session.order}>
                      <span className="flex items-center gap-1 text-xl text-white">
                        <ClockIcon className="size-4" />
                        {sessionTimeLabelLookup[session.order]}
                      </span>
                      <div
                        className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                        onClick={() => {
                          setSelectedSession(session);
                          setIsSessionDialogOpen(true);
                        }}
                      >
                        <span className="font-semibold text-white">
                          {session.title}
                        </span>
                        <ul
                          className="flex gap-2 text-white/50"
                          aria-hidden="true"
                        >
                          <Image
                            className="rounded-full"
                            src={session.speakerImage}
                            alt={session.speaker}
                            width={24}
                            height={24}
                          />
                          <span>{session.speaker}</span>
                          <span aria-hidden="true">&middot;</span>
                          <span>{session.speakerDescription}</span>
                        </ul>
                      </div>
                    </div>
                  ))}
                  <SessionDialog
                    open={isSessionDialogOpen}
                    onClose={() => setIsSessionDialogOpen(false)}
                    session={selectedSession}
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </FadeIn>
  );
}
