import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { ServicesCard } from "./services-card";

export function Services() {
  return (
    <section className="mt-[64px]">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center">
        <TextWithLine text={"Services we’re offering"} />
        <h1 className="text-[36px] font-[800] text-center max-w-[413px]">
          We Provide our clients best services
        </h1>

        <div className="flex items-center gap-[24px] mt-[42px]">
          <ServicesCard
            image={"/HiMiniWrenchScrewdriver.png"}
            title="Service und wartung"
            description="Providing the solutions for tech business"
          />

          <ServicesCard
            image={"/BiWater.png"}
            title="Sanitärtechnik"
            description="Providing the solutions for tech business"
          />

          <ServicesCard
            image={"/IoWaterSharp.png"}
            title="Service und wartung"
            description="Providing the solutions for tech business"
          />

          <ServicesCard
            image={"/CiTempHigh.png"}
            title="Service und wartung"
            description="Providing the solutions for tech business"
          />

          <ServicesCard
            image={"/WiSolarEclipse.png"}
            title="Service und wartung"
            description="Providing the solutions for tech business"
          />
        </div>
      </div>
    </section>
  );
}
