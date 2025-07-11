import clsx from "clsx";
import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

function LayoutButton({
  children,
  icon,
  isLeft,
  className,
}: PropsWithChildren<{
  isLeft?: boolean;
  icon: ReactNode;
  className?: string;
}>) {
  return (
    <button className={clsx("cursor-pointer", className)}>
      {isLeft ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        <>
          {children}
          {icon}
        </>
      )}
    </button>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
}: PropsWithChildren<{
  variant?: "primary" | "secondary" | "play";
  className?: string;
}>) {
  if (variant === "secondary") {
    return (
      <LayoutButton
        isLeft
        className={clsx(
          "h-[42px] flex place-items-center gap-[10px] px-[20px] text-[#FF8A3A] bg-white rounded-[2px]",
          className
        )}
        icon={
          <Image src={"/RightOrange.png"} width={20} height={20} alt="Right" />
        }
      >
        {children}
      </LayoutButton>
    );
  }

  if (variant === "play") {
    return (
      <button
        className={clsx(
          (className =
            "cursor-pointer w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_5px_rgba(255,255,255,0.5)]"),
          className
        )}
      >
        <Image src={"/Play.png"} alt="Play" width={10} height={10} />
      </button>
    );
  }

  return (
    <LayoutButton
      className={clsx(
        "h-[42px] flex place-items-center gap-[10px] px-[20px] bg-[#FF8A3A] text-white rounded-[2px]",
        className
      )}
      icon={
        <Image src={"/RightWhite.png"} width={20} height={20} alt="Right" />
      }
    >
      {children}
    </LayoutButton>
  );
}
