import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classes = clsx("container max-w-6xl mx-auto", className);
  return <div className={classes}>{children}</div>;
}
