import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import { PartnersCard } from "./partners-card";

export function Partners() {
  return (
    <section className="mt-[129px]">
      <Container className="text-center">
        <div className="w-full flex flex-col items-center mx-auto max-w-[413px]">
          <TextWithLine text={"Our partners"} />
          <Title>Companies such as trust us</Title>
        </div>

        <div className="mt-[58px] flex items-center gap-[24px]">
          <PartnersCard
            image="/partners/partners-image-1.png"
            width={94}
            heigth={28}
          />
          <PartnersCard
            image="/partners/partners-image-2.png"
            width={75}
            heigth={23}
          />
          <PartnersCard
            image="/partners/partners-image-3.png"
            width={70}
            heigth={35}
          />
          <PartnersCard
            image="/partners/partners-image-4.png"
            width={84}
            heigth={25}
          />
          <PartnersCard
            image="/partners/partners-image-5.png"
            width={97}
            heigth={29}
          />
          <PartnersCard
            image="/partners/partners-image-6.png"
            width={99}
            heigth={30}
          />
        </div>
      </Container>
    </section>
  );
}
