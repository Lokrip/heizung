import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary" | "secondary";
};

function Input({ className, variant = "primary", ...props }: InputProps) {
  if (variant === "secondary") {
    return (
      <input
        className={clsx(
          "bg-[#F4F5F8] py-[12px] px-[14px] text-[14px] font-medium rounded-[4px]",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <input
      className={clsx(
        "bg-white py-[12px] px-[14px] text-[14px] font-medium rounded-[4px]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
