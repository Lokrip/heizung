import Image from "next/image";

export function ServicesCard({
  title,
  description,
  image,
}: {
  title: string | number;
  description: string | number;
  image: string;
}) {
  return (
    <div className="h-[226px] p-[19px] border-t-[4px] border-t-[#FF8A3A] shadow-[0px_4px_30px_rgba(0,0,0,0.05)] text-center max-w-[184px]">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center h-[90px] w-[90px] bg-[#F4F5F8] rounded-full">
          <Image src={image} alt="Services Card Image" width={32} height={32} />
        </div>
      </div>

      <div className="mt-[18px]">
        <h3 className="font-bold text-[15px]">{title}</h3>
      </div>

      <div className="mt-[8px]">
        <p className="font-[600] text-[12px] text-[#0000004D]">{description}</p>
      </div>
    </div>
  );
}
