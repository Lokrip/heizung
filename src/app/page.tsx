import { AboutUs } from "@/widgets/about-us";
import { JoinUs } from "@/widgets/join-us";
import { Partners } from "@/widgets/partners/partners";
import { Services } from "@/widgets/services";
import { Works } from "@/widgets/works";

export default function Home() {
  return (
    <div id="app">
      <Services />
      <AboutUs />
      <Works />
      <Partners />
      <JoinUs />
    </div>
  );
}
