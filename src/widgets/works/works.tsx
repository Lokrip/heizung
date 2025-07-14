import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Container } from "@/shared/ui/utils/container";
import { Title } from "@/shared/ui/utils/title";
import { WorksCard } from "./works-card";

export function Works() {
  return (
    <section className="mt-[90px]">
      <Container>
        <TextWithLine text={"Our projects"} />
        <Title className="mt-1.5">Completed projects and Client reviews</Title>

        <div className="flex flex-wrap justify-center gap-[24px] mt-[42px]">
          <WorksCard
            image="/works/works-image-7.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
          />
          <WorksCard
            image="/works/works-image-5.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
          />
          <WorksCard
            image="/works/works-image-8.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
          />
          <WorksCard
            image="/works/works-image-1.png"
            title=" Bäder mit Beratung"
            description="Providing the solutions for tech business"
          />
        </div>
      </Container>
    </section>
  );
}
