"use client";

import { staticRoutes } from "@/shared/consts/routes";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarLinks() {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-[24px]">
      {Object.entries(staticRoutes).map(([name, path]) => {
        const isActive = currentPath === path;

        return (
          <Link
            key={name}
            href={path}
            className={clsx(
              "relative group text-[13px] font-normal transition-all duration-300 px-1",
              isActive ? "text-[#FF8A3A]" : "text-black hover:text-[#FF8A3A]"
            )}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
            <span
              className={clsx(
                "absolute bottom-[-6px] left-0 h-[3px] bg-[#FF8A3A]",
                "w-0 transition-all duration-300",
                isActive ? "w-full" : "group-hover:w-full"
              )}
            ></span>
          </Link>
        );
      })}
    </div>
  );
}
