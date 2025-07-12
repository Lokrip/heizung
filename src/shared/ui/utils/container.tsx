import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classes = clsx("container max-w-7xl mx-auto px-[20px]", className);
  return <div className={classes}>{children}</div>;
}
