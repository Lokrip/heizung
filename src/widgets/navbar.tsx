import { Button } from "@/shared/ui/kit/button";
import { LogoIcon } from "@/shared/ui/kit/logo-icon";
import { Container } from "@/shared/ui/utils/container";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-white h-[80px]">
      <Container className="flex items-center justify-between h-full">
        <div className="flex items-center">
          <LogoIcon />

          <div className="flex items-center gap-[24px]">
            <a
              href="#"
              className="group relative text-[13px] font-normal text-black transition-all duration-300 hover:text-[#FF8A3A] px-1"
            >
              Home
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-[2px] bg-[#FF8A3A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="#"
              className="group relative text-[13px] font-normal text-black transition-all duration-300 hover:text-[#FF8A3A] px-1"
            >
              About company
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-[2px] bg-[#FF8A3A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="#"
              className="group relative text-[13px] font-normal text-black transition-all duration-300 hover:text-[#FF8A3A] px-1"
            >
              Our services
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-[2px] bg-[#FF8A3A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="#"
              className="group relative text-[13px] font-normal text-black transition-all duration-300 hover:text-[#FF8A3A] px-1"
            >
              Our works
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-[2px] bg-[#FF8A3A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="#"
              className="group relative text-[13px] font-normal text-black transition-all duration-300 hover:text-[#FF8A3A] px-1"
            >
              Contacts
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-[2px] bg-[#FF8A3A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-[38px]">
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
