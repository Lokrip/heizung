import { AboutUs } from "@/widgets/about-us";
import { Contacts } from "@/widgets/contacts";
import { JoinUs } from "@/widgets/join-us";
import { MainScreen } from "@/widgets/main-screen";
import { Partners } from "@/widgets/partners/partners";
import { Services } from "@/widgets/services";
import { Works } from "@/widgets/works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainScreen
        image={
          <Image
            src="/main-image-1.png"
            width={1440}
            height={419}
            alt="Background"
            className="w-full h-full object-cover"
          />
        }
        title={"Comfort and warmth in your home!"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }
        buttonText={"Order a service"}
      />
      <Services />
      <AboutUs />
      <Works />
      <Partners />
      <JoinUs />
      <Contacts />
    </>
  );
}
