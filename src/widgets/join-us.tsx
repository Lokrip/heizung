import { Button } from "@/shared/ui/kit/button";
import { Metric } from "@/shared/ui/kit/metric";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import Image from "next/image";
import Link from "next/link";

export function JoinUs() {
  return (
    <section className="mt-[156px]">
      <Container className="flex gap-[80px]">
        <div className="w-full max-w-md">
          <TextWithLine text={"About our company"} />

          <Title className="max-w-[416px] mt-[6px]">
            We execute our ideas from the start to finish
          </Title>

          <p className="text-[13px] font-medium opacity-60 mt-[24px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. 
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

          <div className="mt-[52px] flex items-center gap-[25px]">
            <Button>Learn more</Button>
            <Link
              href={"#"}
              className="font-medium text-[14px] underline text-[#FF8A3A]"
            >
              Learn more about our team
            </Link>
          </div>
        </div>

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
      </Container>
    </section>
  );
}
