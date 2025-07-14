import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import { WorksCard } from "../works/works-card";

export function OurTeam() {
  return (
    <section className="mt-[89px]">
      <Container>
        <TextWithLine text={"Our team"} />
        <Title className="max-w-[416px]">
          Trust warmth and comfort in your home to professionals
        </Title>

        <div className="mt-[42px] flex flex-wrap gap-[21px] justify-center">
          <WorksCard
            image="/our-team/works-image-1.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "h-[328px] w-[238px]",
              image: "h-[328px] w-[238px]",
            }}
            height={328}
            width={248}
          />
          <WorksCard
            image="/our-team/works-image-2.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "h-[328px] w-[238px]",
              image: "h-[328px] w-[238px]",
            }}
            height={328}
            width={248}
          />
          <WorksCard
            image="/our-team/works-image-3.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "h-[328px] w-[238px]",
              image: "h-[328px] w-[238px]",
            }}
            height={328}
            width={248}
          />
          <WorksCard
            image="/our-team/works-image-4.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
            classNames={{
              base: "h-[328px] w-[238px]",
              image: "h-[328px] w-[238px]",
            }}
            height={328}
            width={248}
          />
        </div>
      </Container>
    </section>
  );
}
