import { Container } from "@/shared/ui/utils/container";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-[#485769] h-auto md:h-[42px]">
      <Container className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 md:gap-y-0 h-full py-2 md:py-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-0 sm:gap-[18px]">
          <div className="flex items-center gap-1">
            <Image
              src="/Vector-4.png"
              width={14}
              height={11}
              alt=""
            />
            <Link href="#" className="text-white text-[12px]">
              hoff_heizung_sanitaer@t-online.de
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/Vector-5.png"
              width={9}
              height={913}
              alt=""
            />
            <Link href="#" className="text-white text-[12px]">
              hoff_heizung_sanitaer@t-online.de
            </Link>
          </div>
        </div>

        <div className="flex gap-[18px]">
          <Link href="#">
            <Image
              src="/twitter.png"
              width={18}
              height={18}
              alt="twitter"
            />
          </Link>
          <Link href="#">
            <Image
              src="/facebook.png"
              width={18}
              height={18}
              alt="facebook"
            />
          </Link>
          <Link href="#">
            <Image
              src="/instagram.png"
              width={18}
              height={18}
              alt="instagram"
            />
          </Link>
          <Link href="#">
            <Image
              src="/youtube.png"
              width={18}
              height={18}
              alt="youtube"
            />
          </Link>
        </div>
      </Container>
    </header>
  );
};
