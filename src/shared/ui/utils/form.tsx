import { ReactNode } from "react";

export function Form({
  inputs,
  button,
  className
}: {
  inputs: ReactNode;
  button: ReactNode;
  className?: string
}) {
  return (
    <form action="#" className={className}>
      <div className="flex flex-col gap-[16px]">{inputs}</div>
      {button}
    </form>
  );
}
