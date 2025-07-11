import { Container } from "@/shared/ui/utils/container";
import { ServiceBox } from "./service-box";

export function ServicesList() {
  return (
    <section className="mt-[94px]">
      <Container className="flex flex-col items-center gap-[60px]">
        <ServiceBox
          image="/services/services-image-1.png"
          title="Service und wartung"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        <ServiceBox
          image="/services/services-image-2.png"
          title="Bäder mit Beratung"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        <ServiceBox
          image="/services/services-image-3.png"
          title="Wärmepumpen"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        <ServiceBox
          image="/services/services-image-4.png"
          title="Solaranlagen"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        <ServiceBox
          image="/services/services-image-5.png"
          title="Gas und Ölanlagen"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        <ServiceBox
          image="/services/services-image-6.png"
          title="Holz und Pelletkessel"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        <ServiceBox
          image="/services/services-image-7.png"
          title="Trinkwasserinstallation"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </Container>
    </section>
  );
}
