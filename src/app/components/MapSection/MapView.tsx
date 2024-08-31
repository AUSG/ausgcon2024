"use client";

import useKakaoLoader from "@/app/hooks/use-kakao-loader";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import FadeIn from "../FadeIn";

export default function MapView() {
  useKakaoLoader();

  const lat = 37.50359690358887;
  const lng = 127.04153904751364;

  return (
    <FadeIn className="flex w-full justify-center px-4 pt-10">
      <Map
        id="map"
        center={{
          lat: lat,
          lng: lng,
        }}
        className="h-48 w-full tablet:h-96"
        level={3}
      >
        <MapMarker position={{ lat: lat, lng: lng }}>
          <div className="flex h-20 w-48 flex-col gap-2 p-4 tablet:h-28">
            <h1 className="font-bagel-fat-one whitespace-pre-wrap text-xs tablet:text-base">
              {`센터필드 EAST 18층\nAWS Korea`}
            </h1>
            <div className="flex h-full gap-2">
              <a
                className="text-xs text-blue-500 tablet:text-sm"
                href={`https://map.kakao.com/link/map/AUSGCON 2024,${lat},${lng}`}
                target="_blank"
                rel="noreferrer"
              >
                큰지도보기
              </a>
              <a
                className="text-xs text-blue-500 tablet:text-sm"
                href={`https://map.kakao.com/link/to/AUSGCON 2024,${lat},${lng}`}
                target="_blank"
                rel="noreferrer"
              >
                길찾기
              </a>
            </div>
          </div>
        </MapMarker>
      </Map>
    </FadeIn>
  );
}
