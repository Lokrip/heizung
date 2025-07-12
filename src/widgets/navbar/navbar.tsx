import { Button } from "@/shared/ui/kit/button";
import { LogoIcon } from "@/shared/ui/kit/logo-icon";
import { Container } from "@/shared/ui/utils/container";
import Image from "next/image";
import { NavbarLinks } from "./links";

export function Navbar() {
  return (
    <nav className="bg-white h-auto md:h-[80px]">
      <Container className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0 h-full py-4 md:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-y-0">
          <LogoIcon />
          <NavbarLinks />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-y-0 sm:gap-[38px]">
          <div className="flex items-center gap-[7px]">
            <div className="flex items-center justify-center bg-[#FF8A3A] w-[32px] h-[32px] rounded-full">
              <Image
                src="/navbar/react-icons/Vector.png"
                width={16}
                height={16}
                alt="Phone"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-[13px] text-[#0000004D]">
                Call anytime
              </span>
              <span className="font-bold text-[14px] spacecig">
                039888/2611
              </span>
            </div>
          </div>

          <Button>Free consultation</Button>
        </div>
      </Container>
    </nav>
  );
}
