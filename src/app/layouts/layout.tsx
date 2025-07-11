import { Header } from "@/widgets/header";
import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { AppLayout } from "./ui/app-layout";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>

      <AppLayout.Navbar>
        <Navbar />
      </AppLayout.Navbar>

      <AppLayout.Content>{children}</AppLayout.Content>

      <AppLayout.Footer>
        <Footer />
      </AppLayout.Footer>
    </AppLayout>
  );
}
