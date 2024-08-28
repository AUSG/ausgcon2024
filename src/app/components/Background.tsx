import Spline from "@splinetool/react-spline/next";

export default function Background() {
  return (
    <div className="fixed left-0 top-0 -z-20 flex h-full w-full items-center justify-center bg-scene">
      <Spline scene="/cloud.spline" />
    </div>
  );
}
