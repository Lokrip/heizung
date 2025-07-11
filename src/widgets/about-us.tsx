import { Button } from "@/shared/ui/kit/button";
import { Metric } from "@/shared/ui/kit/metric";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import Image from "next/image";

export function AboutUs() {
  return (
    <section className="bg-[#F4F5F8] mt-[80px] py-[35px] h-[621px] sm:px-6 lg:px-8">
      <Container>
        <div className="flex gap-[80px] h-[550px]">
          <div className="relative w-full">
            <div className="relative w-full h-[523px]">
              <div className="flex gap-[16px] absolute z-0 top-0 left-0 bottom-0 h-full">
                <div className="w-[376px] h-[523px] overflow-hidden relative">
                  <Image
                    src="/about-image-1.png"
                    alt="about image 1"
                    width={520}
                    height={523}
                    className="absolute top-0 left-0 w-[520px] h-[523px] object-cover"
                  />
                </div>

                <span className="h-[70px] w-[10px] bg-[#FF8A3A]"></span>
              </div>

              <Image
                src="/about-image-2.png"
                alt="about image 2"
                width={301}
                height={348}
                className="w-[301px] h-[348px] object-cover z-1 absolute bottom-0 left-[219px] shadow-lg shadow-gray-400"
              />
            </div>

            <div className="flex gap-[18px] py-[10px] px-[12px] absolute z-2 bg-white bottom-0 left-[104px] top-[470px]">
              <Image
                src="/about-image-3.png"
                alt="about image 3"
                width={89}
                height={61}
                className="w-[89px] h-[61px] object-cover"
              />

              <Metric
                text={{
                  header: "5000 +",
                  paragraph: "Satisfied clients",
                }}
              />
            </div>
          </div>

          <div className="w-full max-w-md">
            <TextWithLine text={"About our company"} />

            <Title className="max-w-[416px] mt-[6px]">
              We execute our ideas from the start to finish
            </Title>

            <p className="text-[13px] font-medium opacity-60 mt-[24px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. 
            </p>

            <div className="mt-[41px] flex items-center gap-[51px]">
              <Metric
                text={{
                  header: "10 y.",
                  paragraph: "On the market",
                }}
              />

              <Metric
                text={{
                  header: "10 y.",
                  paragraph: "On the market",
                }}
              />

              <Metric
                text={{
                  header: "10 y.",
                  paragraph: "On the market",
                }}
              />
            </div>

            <Button className="mt-[52px]">Learn more</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
