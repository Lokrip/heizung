import { Metric } from "@/shared/ui/kit/metric";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import Image from "next/image";

export function History() {
  return (
    <section className="bg-[#F4F5F8] pt-[68px] py-[35px] sm:px-6 lg:px-8">
      <Container>
        <div className="flex gap-[80px] h-[550px]">
          <div className="w-full max-w-md">
            <TextWithLine text={"About our company"} />

            <Title className="max-w-[416px] mt-[6px]">
              We execute our ideas from the start to finish
            </Title>

            <p className="text-[13px] font-medium opacity-60 mt-[24px]">
              Wir führen einen kleinen familiären Heizungs & Sanitär Betrieb,
              mit der Einstellung Zukunft braucht Macher. Wir bilden Lehrlinge
              aus und freuen uns jeder Zeit auf neue Bewerbung um den Betrieb
              und das Handwerk hoch zuhalten. 
            </p>
            <p className="text-[13px] font-medium opacity-60 mt-[24px]">
              Wir führen einen kleinen familiären Heizungs & Sanitär Betrieb,
              mit der Einstellung Zukunft braucht Macher. Wir bilden Lehrlinge
              aus und freuen uns jeder Zeit auf neue Bewerbung um den Betrieb
              und das Handwerk hoch zuhalten. Wir führen einen kleinen
              familiären Heizungs & Sanitär Betrieb, mit der Einstellung Zukunft
              braucht Macher.
            </p>
          </div>

          <div className="relative w-full h-[523px]">
            <div className="flex gap-[16px] absolute z-0 top-0 right-0 bottom-0 h-full">
              <span className="h-[70px] w-[10px] bg-[#FF8A3A]"></span>

              <div className="w-[376px] h-[523px] overflow-hidden relative">
                <Image
                  src="/about-image-1.png"
                  alt="about image 1"
                  width={520}
                  height={523}
                  className="absolute top-0 right-0 w-[520px] h-[523px] object-cover"
                />
              </div>
            </div>

            <Image
              src="/about-image-2.png"
              alt="about image 2"
              width={301}
              height={348}
              className="w-[301px] h-[348px] object-cover z-1 absolute bottom-0 right-[226px] shadow-lg shadow-gray-400"
            />
          </div>
        </div>

        <div className="mt-[103px] flex items-center gap-[110px] justify-center">
          <Metric
            text={{ header: "10 y.", paragraph: "On the market" }}
            textSize={{
              header: "text-[36px] font-[800]",
              paragraph: "text-[14px] font-[400]",
            }}
          />

          <Metric
            text={{ header: "10 y.", paragraph: "On the market" }}
            textSize={{
              header: "text-[36px] font-[800]",
              paragraph: "text-[14px] font-[400]",
            }}
          />

          <Metric
            text={{ header: "10 y.", paragraph: "On the market" }}
            textSize={{
              header: "text-[36px] font-[800]",
              paragraph: "text-[14px] font-[400]",
            }}
          />

          <Metric
            text={{ header: "10 y.", paragraph: "On the market" }}
            textSize={{
              header: "text-[36px] font-[800]",
              paragraph: "text-[14px] font-[400]",
            }}
          />

          <Metric
            text={{ header: "10 y.", paragraph: "On the market" }}
            textSize={{
              header: "text-[36px] font-[800]",
              paragraph: "text-[14px] font-[400]",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
