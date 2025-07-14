import clsx from "clsx";
import Image from "next/image";

function GradientWork({ className }: { className?: string }) {
  return <div className={clsx("absolute inset-0", className)} />;
}

export function WorksCard({
  image,
  description,
  title,
  classNames,
  height,
  width,

  isWorks = false,
}: {
  image: string;
  title: string;
  description: string;
  classNames?: {
    base: string;
    image: string;
  };
  width?: number;
  height?: number;

  isWorks?: boolean;
}) {
  const screen = (
    <div className="absolute bottom-[16px] left-[16px] text-white z-10">
      <h3 className="text-[14px] font-[800] text-white">{title}</h3>
      <p className="text-[12px] mt-1 text-white">{description}</p>
    </div>
  );

  if (isWorks) {
    return (
      <div
        className={clsx(
          "relative overflow-hidden rounded-[6px] w-[288px] h-[200px]",
          classNames?.base
        )}
      >
        <Image
          className={clsx(
            "absolute inset-0 object-cover w-[288px] h-[200px]",
            classNames?.image
          )}
          alt={title}
          src={image}
          width={width ?? 288}
          height={height ?? 200}
        />
        <GradientWork />
        {screen}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[6px] shadow-[10px_10px_60px_10px_#4857691A] w-[267px] h-[188px]",
        classNames?.base
      )}
    >
      <Image
        className={clsx(
          "absolute inset-0 object-cover w-[288px] h-[200px]",
          classNames?.image
        )}
        alt={title}
        src={image}
        width={width ?? 288}
        height={height ?? 200}
      />

      <GradientWork className="bg-gradient-to-t from-[rgba(72,87,105,0.62)] to-[rgba(72,87,105,0)]" />
      {screen}
    </div>
  );
}
