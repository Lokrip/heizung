import { Button } from "@/shared/ui/kit/button";
import { Container } from "@/shared/ui/utils/container";
import Link from "next/link";
import { ReactNode } from "react";

export function MainScreen({
  image,
  title,
  description,
  buttonText,
}: {
  image: ReactNode;
  title: ReactNode;
  description: ReactNode;
  buttonText: ReactNode;
}) {
  return (
    <main className="relative h-[419px]">
      <div className="absolute inset-0 z-1 bg-black opacity-30 h-full w-full"></div>
      <div className="absolute inset-0 z-0">{image}</div>

      <Container className="relative z-2 h-full flex items-center">
        <div className="max-w-[704px]">
          <div>
            <h1 className="text-[54px] font-[800] text-white">{title}</h1>
            <p className="text-[13px] font-[600] mt-[18px] text-white max-w-[444px]">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-[24px]">
            <Button variant="secondary">{buttonText}</Button>
            <Link href={"#"} className="flex items-center gap-[9px]">
              <Button variant="play" />
              <span className="text-[14px] font-medium text-white">
                Our video!
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
