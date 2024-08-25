import Spline from "@splinetool/react-spline/next";

export default function Background() {
  return (
    <div className="fixed left-0 top-0 -z-20 flex h-full w-full items-center justify-center bg-scene">
      <Spline scene="https://prod.spline.design/jvfn5O02IqRZEfqP/scene.splinecode" />
    </div>
  );
}
