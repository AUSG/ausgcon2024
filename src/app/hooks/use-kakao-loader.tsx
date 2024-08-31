"use client";

import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

/**
 * @see {@link https://apis.map.kakao.com/web/guide|Kakao Maps API}
 */
export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: process.env.KAKAOJSKEY ?? "",
    libraries: ["clusterer", "drawing", "services"],
  });
}
