import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={clsx(
        "bg-white py-[12px] px-[14px] text-[14px] font-medium h-[122px] rounded-[4px]",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
