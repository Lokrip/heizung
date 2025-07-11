import Image from "next/image";

export function WorksCard({
  image,
  description,
  title,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[6px] shadow-[10px_10px_60px_10px_#4857691A] w-[288px] h-[200px]">
      <Image
        className="absolute inset-0 object-cover w-[288px] h-[200px]"
        alt={title}
        src={image}
        width={288}
        height={200}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(72,87,105,0.62)] to-[rgba(72,87,105,0)]" />

      <div className="absolute bottom-[16px] left-[16px] text-white z-10">
        <h3 className="text-[14px] font-[800] text-white">{title}</h3>
        <p className="text-[12px] mt-1 text-white">{description}</p>
      </div>
    </div>
  );
}
