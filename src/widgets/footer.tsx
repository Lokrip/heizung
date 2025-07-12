import { LogoIcon } from "@/shared/ui/kit/logo-icon";
import { Container } from "@/shared/ui/utils/container";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative bg-[#F4F5F8] mt-[88px]">
      <footer className="min-h-[447px] lg:h-[447px]">
        <Container className="pt-[77px] pb-[40px]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[40px]">
            {/* Logo + Description + Social */}
            <div>
              <LogoIcon />
              <p className="mt-[15px] text-[13px] font-medium max-w-[288px] text-[#00000099]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <div className="flex items-center gap-4 mt-[45px]">
                {["twitter", "facebook", "instagram", "youtube"].map((icon) => (
                  <Link
                    key={icon}
                    href="#"
                    className="w-[32px] h-[32px] rounded-full bg-[#485769] flex items-center justify-center"
                  >
                    <Image
                      src={`/${icon}.png`}
                      width={14}
                      height={14}
                      alt={icon}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links 1 */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="group relative text-[14px] font-bold text-black">
                Quick links
                <span className="absolute bottom-[-6px] h-[1px] bg-[#FF8A3A] w-full left-0"></span>
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {["About company", "Price", "Gallery", "Training", "Contacts"].map((text) => (
                  <li key={text}>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="group relative text-[14px] font-bold text-black">
                Quick links
                <span className="absolute bottom-[-6px] h-[1px] bg-[#FF8A3A] w-full left-0"></span>
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {["About company", "Price", "Gallery", "Training", "Contacts"].map((text) => (
                  <li key={text}>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="group relative text-[14px] font-bold text-black">
                Contacts
                <span className="absolute bottom-[-6px] h-[1px] bg-[#FF8A3A] w-full left-0"></span>
              </h3>
              <ul className="flex flex-col gap-[12px]">
                <li className="flex items-center gap-[5px]">
                  <Image src={"/Vector-4.png"} width={9} height={13} alt="Address" />
                  <span className="text-[13px] font-medium">
                    Lychen, Beenzer Chaussee 9 
                  </span>
                </li>
                <li className="flex items-center gap-[2px]">
                  <Image src={"/Vector-5.png"} width={11} height={14} alt="Email" />
                  <span className="text-[13px] font-medium">
                    hoff_heizung_sanitaer@t-online.de
                  </span>
                </li>
                <li className="flex items-center gap-[5px]">
                  <Image src={"/Vector-6.png"} width={12} height={12} alt="Phone" />
                  <span className="text-[13px] font-medium">
                    9039888/2611 
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>

      {/* Bottom bar */}
      <div className="h-[34px] bg-[#485769] rounded-t-full flex items-center justify-center">
        <p className="text-white text-[12px] font-medium text-center px-2">
          © 2024. The official website of Heizung. All rights reserved. 
        </p>
      </div>
    </div>
  );
};
