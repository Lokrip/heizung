import { Button } from "@/shared/ui/kit/button";
import { Metric } from "@/shared/ui/kit/metric";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import Link from "next/link";
import { ImageOverlap } from "./image-overlap";

export function JoinUs() {
  return (
    <section className="mt-[156px]">
      <Container className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]">
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

          <div className="mt-[41px] flex flex-col sm:flex-row items-start sm:items-center gap-[24px] sm:gap-[51px]">
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

          <div className="mt-[52px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px] sm:gap-[25px]">
            <Button>Learn more</Button>
            <Link
              href={"#"}
              className="font-medium text-[14px] underline text-[#FF8A3A]"
            >
              Learn more about our team
            </Link>
          </div>
        </div>

        <div className="w-full">
          <ImageOverlap />
        </div>
      </Container>
    </section>
  );
}
