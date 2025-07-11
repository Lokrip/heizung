import { LogoIcon } from "@/shared/ui/kit/logo-icon";
import { Container } from "@/shared/ui/utils/container";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-[447px] relative">
      <footer className="h-full">
        <Container className="mt-[77px] h-full relative">
          <div className="absolute translate-y-[-50%] top-[50%] right-0 left-0 w-full">
            <div className="flex justify-between items-center">
              <div>
                <LogoIcon />
                <p className="mt-[15px] text-[13px] font-medium max-w-[288px] text-[#00000099]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>

                <div className="flex items-center gap-4 mt-[45px]">
                  <Link
                    href="#"
                    className="w-[32px] h-[32px] rounded-full bg-[#485769] flex items-center justify-center"
                  >
                    <Image
                      src="/twitter.png"
                      width={13}
                      height={10}
                      alt="twitter"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-[32px] h-[32px] rounded-full bg-[#485769] flex items-center justify-center"
                  >
                    <Image
                      src="/facebook.png"
                      width={12}
                      height={12}
                      alt="facebook"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-[32px] h-[32px] rounded-full bg-[#485769] flex items-center justify-center"
                  >
                    <Image
                      src="/instagram.png"
                      width={12}
                      height={12}
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-[32px] h-[32px] rounded-full bg-[#485769] flex items-center justify-center"
                  >
                    <Image
                      src="/youtube.png"
                      width={14}
                      height={10}
                      alt="youtube"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <h3 className="group relative text-[14px] font-[800px] text-black">
                  Quick links
                  <span className="absolute bottom-[-6px] h-[1px] bg-[#FF8A3A] w-full left-0"></span>
                </h3>

                <ul className="flex flex-col gap-[12px]">
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      About company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Price
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-[16px]">
                <h3 className="group relative text-[14px] font-[800px] text-black">
                  Quick links
                  <span className="absolute bottom-[-6px] h-[1px] bg-[#FF8A3A] w-full left-0"></span>
                </h3>

                <ul className="flex flex-col gap-[12px]">
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      About company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Price
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium text-[13px] text-[#00000099]"
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-[16px] self-start">
                <h3 className="group relative text-[14px] font-[800px] text-black">
                  Contacts
                  <span className="absolute bottom-[-6px] h-[1px] bg-[#FF8A3A] w-full left-0"></span>
                </h3>

                <ul className="flex flex-col gap-[12px]">
                  <li className="flex items-center gap-[5px]">
                    <Image
                      src={"/Vector-4.png"}
                      width={9}
                      height={13}
                      alt="Address"
                    />
                    <span className="text-[13px] font-medium">
                      Lychen, Beenzer Chaussee 9 
                    </span>
                  </li>
                  <li className="flex items-center gap-[2px]">
                    <Image
                      src={"/Vector-5.png"}
                      width={11}
                      height={14}
                      alt="Messagers"
                    />
                    <span className="text-[13px] font-medium">
                      hoff_heizung_sanitaer@t-online.de
                    </span>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <Image
                      src={"/Vector-6.png"}
                      width={12}
                      height={12}
                      alt="Phone"
                    />
                    <span className="text-[13px] font-medium">
                      9039888/2611 
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div className="bg-white">
        <div className="h-[34px] bg-[#485769] rounded-t-full flex items-center justify-center">
          <p className="text-white text-[12px] font-medium">
            © 2024. The official website of Heizung. All rights reserved. 
          </p>
        </div>
      </div>
    </div>
  );
};
