import Image from "next/image";

export function PartnersCard({
  image,
  width,
  heigth,
}: {
  image: string;
  width: number;
  heigth: number;
}) {
  return (
    <div className="w-[184px] h-[64px] bg-white border-[1px] flex items-center justify-center border-gray-50 shadow-gray-50 shadow-lg">
      <Image width={width} height={heigth} src={image} alt="Partners" />
    </div>
  );
}
