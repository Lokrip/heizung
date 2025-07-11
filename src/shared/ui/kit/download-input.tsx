import Image from "next/image";

export function DownloadInput() {
  return (
    <label>
      <span className="h-[64px] cursor-pointer flex gap-[15px] items-center justify-center rounded-[3px] py-[12px] px-[14px] border border-dashed bg-[#F4F5F800] border-[#4857698A] opacity-[54%]">
        <Image src={"/BsUpload.png"} width={17} height={17} alt="Download" />
        <span>Upload your CV in PDF format</span>
      </span>
      <input type="file" className="hidden" />
    </label>
  );
}
