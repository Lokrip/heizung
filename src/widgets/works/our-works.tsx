import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import { WorksCard } from "./works-card";

export function OurWorks() {
  return (
    <section className="mt-[59px]">
      <Container>
        <TextWithLine text={"Our works"} />
        <Title className="mt-[6px]">Our works</Title>

        <div className="grid grid-cols-3 gap-[24px] mt-[42px]">
          <WorksCard
            image="/works/works-image-1.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-2.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-3.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-4.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-5.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-6.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-7.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-8.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />

          <WorksCard
            image="/works/works-image-9.png"
            title="Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "w-[392px] h-[265px]",
              image: "w-[392px] h-[265px]",
            }}
            width={392}
            height={265}
            isWorks
          />
        </div>
      </Container>
    </section>
  );
}
