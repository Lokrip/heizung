import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Title({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  return (
    <h2 className={clsx("text-[36px] font-[800] text-black", className)}>
      {children}
    </h2>
  );
}
