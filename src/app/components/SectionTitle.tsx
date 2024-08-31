import FadeIn from "./FadeIn";

interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div>
      <FadeIn
        className="text-center text-lg text-white tablet:text-2xl"
        distance={30}
      >
        {title}
      </FadeIn>
      {description && (
        <FadeIn className="description" distance={30}>
          <p className="mt-7 whitespace-pre-wrap text-wrap text-center text-3xl font-semibold text-white tablet:text-5xl">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
