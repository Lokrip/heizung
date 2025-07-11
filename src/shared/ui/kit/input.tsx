import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ className, ...props }: InputProps) {
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
