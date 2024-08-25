export const sessionTimeLabelLookup: Record<number, string> = {
  1: "13:00 ~ 13:40",
  2: "13:40 ~ 14:20",
  3: "14:20 ~ 14:35", // 쉬는 시간
  4: "14:35 ~ 14:55",
  5: "14:55 ~ 15:30", // 쉬는 시간
  6: "15:30 ~ 16:10",
  7: "16:10 ~ 16:25", // 쉬는 시간
  8: "16:25 ~ 16:45",
  9: "16:45 ~ 17:00", // 쉬는 시간
  10: "17:00 ~ 17:40",
  11: "17:40 ~",
  12: "~ 18:30",
};

export const sessionList = [
  {
    track: "트랙 1",
    sessions: [
      {
        title: "오프닝",
        description: "AUSGCON 2024 오프닝",
        speaker: "김태강",
        speakerImage: "/images/session/avatar.png", // TODO: 실제 이미지로 변경
        speakerDescription: "AUSGCON 2024 오프닝",
        order: 1,
      },
      {
        title: "트랙 1 세션 1",
        description: "트랙 1 세션 1 설명",
        speaker: "김태강",
        speakerImage: "/images/session/avatar.png", // TODO: 실제 이미지로 변경
        speakerDescription: "트랙 1 세션 1 스피커 설명",
        order: 2,
      },
    ],
  },
  {
    track: "트랙 2",
    sessions: [
      {
        title: "오프닝",
        description: "AUSGCON 2024 오프닝",
        speaker: "김태강",
        speakerImage: "/images/session/avatar.png", // TODO: 실제 이미지로 변경
        speakerDescription: "AUSGCON 2024 오프닝",
        order: 1,
      },
      {
        title: "트랙 2 세션 1",
        description: "트랙 2 세션 1 설명",
        speaker: "김태강",
        speakerImage: "/images/session/avatar.png", // TODO: 실제 이미지로 변경
        speakerDescription: "트랙 2 세션 1 스피커 설명",
        order: 2,
      },
      {
        title: "트랙 2 세션 2",
        description: "트랙 2 세션 2 설명",
        speaker: "김태강",
        speakerImage: "/images/session/avatar.png", // TODO: 실제 이미지로 변경
        speakerDescription: "트랙 2 세션 2 스피커 설명",
        order: 3,
      },
      {
        title: "트랙 2 세션 3",
        description: "트랙 2 세션 3 설명",
        speaker: "김태강",
        speakerImage: "/images/session/avatar.png", // TODO: 실제 이미지로 변경
        speakerDescription: "트랙 2 세션 3 스피커 설명",
        order: 4,
      },
    ],
  },
];
