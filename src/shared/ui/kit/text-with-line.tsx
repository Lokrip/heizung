import clsx from "clsx";

export function TextWithLine({
  text,
  className,
}: {
  text: string | number;
  className?: string;
}) {
  return (
    <div className={clsx("flex items-center gap-[12px]", className)}>
      <span className="text-[14px] font-bold text-[#FF8A3A]">{text}</span>
      <span className="w-[35px] h-[1px] bg-[#FF8A3A]"></span>
    </div>
  );
}
