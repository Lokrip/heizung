import clsx from "clsx";

export interface TextSize {
  header?: string;
  paragraph?: string;
}

export interface Text {
  header: string;
  paragraph: string;
}

export function Metric({
  textSize,
  text,
}: {
  textSize?: TextSize;
  text: Text;
}) {
  return (
    <div className="flex flex-col">
      <span
        className={clsx(
          "text-[#FF8A3A]",
          textSize?.header ?? "text-[24px] font-[800]"
        )}
      >
        {text.header}
      </span>
      <span
        className={clsx(
          "font-medium opacity-60",
          textSize?.paragraph ?? "text-[13px]"
        )}
      >
        {text.paragraph}
      </span>
    </div>
  );
}
