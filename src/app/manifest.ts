import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AUSGCON 2024",
    short_name: "AUSGCON",
    description:
      "대학생&주니어를 위한 IT 컨퍼런스! “AUSGCON”(아우쓱콘)을 소개합니다.",
    start_url: "/",
    display: "standalone",
    theme_color: "#CDF6FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
