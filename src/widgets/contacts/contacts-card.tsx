import clsx from "clsx";
import Image from "next/image";

export function ContactsCard({
  image,
  width,
  height,
  title,
  description,
  isTextBlack = false,
}: {
  width: number;
  height: number;
  title: string;
  description: string;
  image: string;
  isTextBlack?: boolean;
}) {
  return (
    <div className="flex items-center gap-[24px]">
      <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#FF8A3A]">
        <Image src={image} alt="Contact Image" width={width} height={height} />
      </div>

      <div className="flex flex-col gap-[8px]">
        <h4
          className={clsx(
            "text-[14px] font-[800] text-[#FFFFFF]",
            isTextBlack && "text-black"
          )}
        >
          {title}
        </h4>
        <p
          className={clsx(
            "text-[13px] font-medium text-[#FFFFFF]",
            isTextBlack && "text-black opacity-60"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
