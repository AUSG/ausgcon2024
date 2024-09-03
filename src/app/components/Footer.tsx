import Image from "next/image";
import Link from "next/link";
import {
  GITHUB_LINK,
  HOMEPAGE_LINK,
  INSTAGRAM_LINK,
  LINKED_IN_LINK,
  YOUTUBE_LINK,
} from "../constants/link";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content flex w-full items-center p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Image src="/short_logo.png" alt="Logo" width={100} height={100} />
          <div className="flex items-center gap-px">
            <Link href={HOMEPAGE_LINK} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path d="M 13 4 L 13 6 L 9 6 L 9 8 L 5 8 L 5 10 L 2 10 L 2 11 L 2 12 L 2 13 L 4 13 L 4 28 L 28 28 L 28 13 L 30 13 L 30 12 L 30 11 L 30 10 L 27 10 L 27 9 L 27 8 L 27 4 L 25 4 L 25 8 L 23 8 L 23 6 L 19 6 L 19 4 L 13 4 z M 14 7 L 18 7 L 18 8 L 18 9 L 22 9 L 22 10 L 22 11 L 26 11 L 26 12 L 26 13 L 26 26 L 22 26 L 22 14 L 10 14 L 10 26 L 6 26 L 6 13 L 6 12 L 6 11 L 10 11 L 10 10 L 10 9 L 14 9 L 14 8 L 14 7 z M 12 16 L 20 16 L 20 20 L 18 20 L 18 22 L 20 22 L 20 26 L 12 26 L 12 16 z"></path>
              </svg>
            </Link>
            <Link href={INSTAGRAM_LINK} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path d="M 8 4 L 8 6 L 24 6 L 24 4 L 8 4 z M 24 6 L 24 8 L 26 8 L 26 6 L 24 6 z M 26 8 L 26 24 L 28 24 L 28 8 L 26 8 z M 26 24 L 24 24 L 24 26 L 26 26 L 26 24 z M 24 26 L 8 26 L 8 28 L 24 28 L 24 26 z M 8 26 L 8 24 L 6 24 L 6 26 L 8 26 z M 6 24 L 6 8 L 4 8 L 4 24 L 6 24 z M 6 8 L 8 8 L 8 6 L 6 6 L 6 8 z M 21 9 L 21 11 L 23 11 L 23 9 L 21 9 z M 13 11 L 13 13 L 19 13 L 19 11 L 13 11 z M 19 13 L 19 19 L 21 19 L 21 13 L 19 13 z M 19 19 L 13 19 L 13 21 L 19 21 L 19 19 z M 13 19 L 13 13 L 11 13 L 11 19 L 13 19 z"></path>
              </svg>
            </Link>
            <Link href={YOUTUBE_LINK} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path d="M 7 6 L 7 8 L 25 8 L 25 6 L 7 6 z M 25 8 L 25 10 L 27 10 L 27 8 L 25 8 z M 27 10 L 27 22 L 29 22 L 29 10 L 27 10 z M 27 22 L 25 22 L 25 24 L 27 24 L 27 22 z M 25 24 L 7 24 L 7 26 L 25 26 L 25 24 z M 7 24 L 7 22 L 5 22 L 5 24 L 7 24 z M 5 22 L 5 10 L 3 10 L 3 22 L 5 22 z M 5 10 L 7 10 L 7 8 L 5 8 L 5 10 z M 13 12 L 13 20 L 15 20 L 15 19 L 17 19 L 17 18 L 19 18 L 19 17 L 21 17 L 21 15 L 19 15 L 19 14 L 17 14 L 17 13 L 15 13 L 15 12 L 13 12 z"></path>
              </svg>
            </Link>
            <Link href={GITHUB_LINK} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </Link>
            <Link href={LINKED_IN_LINK} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path
                  d="M2.997,26.996v-22h2v-2	h22v2h2v22h-2v2h-22v-2H2.997z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#e6e5e5"
                  fill-rule="evenodd"
                  d="M6.996,12.997v11.999	h4.001V12.997H6.996z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#e6e5e5"
                  fill-rule="evenodd"
                  d="M6.996,6.997v3.999	h4.001V6.997H6.996z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#e6e5e5"
                  fill-rule="evenodd"
                  d="M12.997,24.996v-12h4v2	h2v2h-2v8H12.997z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#e6e5e5"
                  fill-rule="evenodd"
                  d="M20.997,24.996v-10h-2	v-2h4v2h2v10H20.997z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center text-xs text-white/70 sm:text-sm">
          <p>@ AUSG {new Date().getFullYear()} All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
