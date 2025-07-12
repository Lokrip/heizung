import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: "secondary" | "primary";
};

function Textarea({ className, variant = "primary", ...props }: TextareaProps) {
  if (variant === "secondary") {
    return (
      <textarea
        className={clsx(
          "bg-[#F4F5F8] py-[12px] px-[14px] text-[14px] font-medium h-[122px] rounded-[4px]",
          className
        )}
        {...props}
      />
    );
  }

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
