"use client";

import { useState } from "react";
import Image from "next/image";
import {
  sessionList,
  sessionTagColorLookup,
  sessionTimeLabelLookup,
} from "@/app/constants/session";
import { cn } from "@/app/lib/utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import FadeIn from "../FadeIn";
import SessionDialog from "./SessionDialog";

export default function SectionList() {
  const [isSessionDialogOpen, setIsSessionDialogOpen] = useState(false);
  const [selectedSession, setSelectedSession] =
    useState<(typeof sessionList)[number]["sessions"][number]>();

  return (
    <FadeIn className="flex w-full justify-center px-4 pt-10">
      <div className="flex w-full flex-col gap-2">
        <span className="flex w-full items-center justify-center gap-1">
          <Image
            className="aspect-square shrink-0"
            src="/session/ausg_badge.png"
            alt="ausg"
            width={16}
            height={16}
          />
          <span className="text-sm/6 text-white/70 tablet:text-base">
            세션은 AUSG 멤버의 세션입니다.
          </span>
        </span>
        <TabGroup>
          <TabList className="flex justify-center gap-4">
            {sessionList.map(({ track }) => (
              <Tab
                key={track}
                className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-white/5 data-[selected]:bg-white/10 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white tablet:text-lg"
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
                      <span className="flex flex-col items-start gap-1 text-lg text-white/90 tablet:flex-row tablet:text-xl">
                        <div className="font-bagel-fat-one flex shrink-0 items-center gap-1">
                          <ClockIcon className="size-4 shrink-0 tablet:size-5" />
                          {sessionTimeLabelLookup[session.order]}
                          {session.speaker?.AUSG && (
                            <Image
                              className="aspect-square shrink-0"
                              src="/session/ausg_badge.png"
                              alt="ausg"
                              width={16}
                              height={16}
                            />
                          )}
                        </div>
                        <div className="flex gap-1">
                          {session.tags &&
                            session.tags.map((tag) => (
                              <span
                                key={tag}
                                className={cn(
                                  "shrink-0 px-2 py-px text-xs text-white tablet:text-sm/6",
                                  tag.length <= 2
                                    ? "rounded-xl"
                                    : "rounded-full",
                                  sessionTagColorLookup[tag]
                                )}
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      </span>
                      <div
                        className="relative rounded-md p-3 transition hover:bg-white/5"
                        onClick={() => {
                          setSelectedSession(session);
                          setIsSessionDialogOpen(true);
                        }}
                      >
                        <span className="flex items-center gap-1 text-xl font-semibold text-white tablet:text-2xl">
                          {session.title}
                        </span>
                        {session.speaker && (
                          <div className="flex gap-2" aria-hidden="true">
                            <div className="relative size-6 shrink-0">
                              <Image
                                className="aspect-square shrink-0 rounded-full object-cover"
                                src={session.speaker.image}
                                alt={session.speaker.name}
                                fill
                              />
                            </div>
                            <span className="line-clamp-1 flex items-center gap-1 text-sm/6 text-white/70">
                              {session.speaker.name} &middot;{" "}
                              {session.speaker.title}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="my-2 h-px bg-white/20" />
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
