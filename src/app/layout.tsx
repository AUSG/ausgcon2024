import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Bagel_Fat_One } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bagel-fat-one",
});

const dunggeunmo = localFont({
  src: "./fonts/DungGeunMo.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "AUSGCON 2024",
  description:
    "대학생&주니어를 위한 IT 컨퍼런스! “AUSGCON”(아우쓱콘)을 소개합니다.",
  openGraph: {
    type: "website",
    url: "https://2024.ausg.me",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 600,
        alt: "AUSGCON 2024",
      },
    ],
  },
  twitter: {
    title: "AUSGCON 2024",
    description:
      "대학생&주니어를 위한 IT 컨퍼런스! “AUSGCON”(아우쓱콘)을 소개합니다.",
    card: "summary_large_image",
    creator: "@FeConf",
    images: [{ url: "/thumbnail.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bagelFatOne.variable} ${dunggeunmo.className}`}>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOJSKEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <GoogleAnalytics gaId="G-47HSXJ1HKX" />
        {children}
      </body>
    </html>
  );
}
