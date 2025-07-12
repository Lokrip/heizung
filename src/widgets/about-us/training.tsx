import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import Image from "next/image";

export function Training() {
  return (
    <section className="mt-[152px]">
      <Container className="flex flex-col md:flex-row gap-[24px]">
        <Image
          src={"/training.png"}
          className="rounded-[6px] shadow-md w-full md:w-[520px] h-auto"
          width={520}
          height={278}
          alt="training"
          priority
        />

        <div className="flex flex-col justify-center">
          <TextWithLine text={"Training"} />
          <Title className="mt-[6px]">
            Employee training and professional development
          </Title>
          <p className="mt-[12px] text-[14px] leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. 
          </p>
        </div>
      </Container>
    </section>
  );
}
