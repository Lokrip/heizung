import { ReactNode } from "react";

export function Form({
  inputs,
  button,
}: {
  inputs: ReactNode;
  button: ReactNode;
}) {
  return (
    <form action="#">
      <div className="flex flex-col gap-[16px]">{inputs}</div>
      {button}
    </form>
  );
}
