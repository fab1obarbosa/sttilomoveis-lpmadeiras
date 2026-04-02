import type { ReactNode } from "react";

interface SectionIntroProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  align?: "left" | "center";
  mobileCenter?: boolean;
}

export const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = "left",
  mobileCenter = false,
}: SectionIntroProps) => {
  const alignment =
    align === "center"
      ? "mx-auto text-center [&_.section-eyebrow]:mx-auto"
      : mobileCenter
        ? "text-center md:text-left [&_.section-eyebrow]:mx-auto md:[&_.section-eyebrow]:mx-0"
        : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
    </div>
  );
};
