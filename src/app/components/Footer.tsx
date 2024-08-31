import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content flex w-full items-center p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <Image src="/short_logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex items-center text-xs text-white/70 sm:text-sm">
          <p>@ AUSG {new Date().getFullYear()} All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
