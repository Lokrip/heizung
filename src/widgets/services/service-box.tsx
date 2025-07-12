import { Button } from "@/shared/ui/kit/button";
import Image from "next/image";
import Link from "next/link";

export function ServiceBox({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-[24px]">
      <div className="flex-1">
        <h3 className="font-[800] text-[24px]">{title}</h3>
        <p className="text-[13px] font-medium mt-[6px]">{description}</p>

        <div className="flex items-center gap-[20px] mt-[16px]">
          <Button>Learn more</Button>
          <Link
            href={"#"}
            className="font-medium text-[14px] underline text-[#FF8A3A] flex items-center gap-[6px]"
          >
            Learn more about our team
            <Image
              src={"/BsArrowRight.png"}
              width={16}
              height={16}
              alt="BsArrowRight"
            />
          </Link>
        </div>
      </div>

      <Image
        src={image}
        alt={"Image service"}
        width={495}
        height={180}
        className="w-full max-w-[495px] h-[180px] object-cover"
      />
    </div>
  );
}
