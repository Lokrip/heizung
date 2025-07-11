import { Header } from "@/widgets/header";
import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { AppLayout } from "./ui/app-layout";
import { PropsWithChildren } from "react";
import { MainScreen } from "@/widgets/main-screen";
import Image from "next/image";

export function Layout({ children }: PropsWithChildren) {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>

      <AppLayout.Navbar>
        <Navbar />
      </AppLayout.Navbar>

      <AppLayout.MainScreen>
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
        />
      </AppLayout.MainScreen>

      <AppLayout.Content>{children}</AppLayout.Content>

      <AppLayout.Footer>
        <Footer />
      </AppLayout.Footer>
    </AppLayout>
  );
}
