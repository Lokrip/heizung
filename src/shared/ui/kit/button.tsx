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
}: PropsWithChildren<{ variant?: "primary" | "secondary" | "play" }>) {
  if (variant === "secondary") {
    return (
      <LayoutButton
        isLeft
        className="h-[42px] flex place-items-center gap-[10px] px-[20px] text-[#FF8A3A] bg-white rounded-[2px]"
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
      <button className="cursor-pointer w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_5px_rgba(255,255,255,0.5)]">
        <Image src={"/Play.png"} alt="Play" width={10} height={10} />
      </button>
    );
  }

  return (
    <LayoutButton
      className="h-[42px] flex place-items-center gap-[10px] px-[20px] bg-[#FF8A3A] text-white rounded-[2px]"
      icon={
        <Image src={"/RightWhite.png"} width={20} height={20} alt="Right" />
      }
    >
      {children}
    </LayoutButton>
  );
}
