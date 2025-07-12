import { routes } from "@/shared/consts/routes";
import clsx from "clsx";
import Link from "next/link";

export function LogoIcon({ className }: { className?: string }) {
  const clases = clsx("mr-[69px]", className);

  return (
    <div className={clases}>
      <Link href={routes.home}>
        <h2 className="font-[700] text-[32px]">Logo</h2>
      </Link>
    </div>
  );
}
