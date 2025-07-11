import Image from "next/image";

export function ImageOverlap() {
  return (
    <div className="relative h-[418px] w-[541px]">
      <div className="rounded-full overflow-hidden w-[367px] h-[367px] shadow-[0px_0px_0px_26px_rgba(198,198,198,0.2)] absolute top-[26px] bottom-[26px] right-[26px]">
        <Image
          src="/join-us/join-us-image-2.png"
          alt="join us image 1"
          width={367}
          height={367}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-[240px] h-[240px] rounded-full overflow-hidden">
        <Image
          src="/join-us/join-us-image-1.png"
          alt="join us image 2"
          width={240}
          height={240}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
