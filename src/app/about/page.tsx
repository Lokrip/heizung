import { AboutJoinUs, History, OurTeam, Training } from "@/widgets/about-us";
import { MainScreen } from "@/widgets/main-screen";
import Image from "next/image";

export default function About() {
  return (
    <>
      <MainScreen
        image={
          <Image
            src="/about-main.png"
            width={1440}
            height={419}
            alt="Background"
            className="w-full h-full object-cover"
          />
        }
        title={"About our company"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }
        buttonText={"Join us"}
      />
      <History />
      <OurTeam />
      <Training />
      <AboutJoinUs />
    </>
  );
}
