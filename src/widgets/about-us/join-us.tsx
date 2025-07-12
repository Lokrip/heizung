import { Container } from "@/shared/ui/utils/container";
import { ImageOverlap } from "../join-us/image-overlap";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Title } from "@/shared/ui/utils/title";
import { Form } from "@/shared/ui/utils/form";
import { Button } from "@/shared/ui/kit/button";
import { Input } from "@/shared/ui/kit/input";
import { DownloadInput } from "@/shared/ui/kit/download-input";

export function AboutJoinUs() {
  return (
    <section className="mt-[120px]">
      <Container className="flex flex-col md:flex-row gap-[40px] md:gap-[80px]">
        <div className="w-full max-w-md">
          <TextWithLine text={"About our company"} />

          <Title className="max-w-[510px] mt-[6px]">
            We are a team of experts ready to train young professionals as well
          </Title>

          <p className="text-[13px] font-medium opacity-60 mt-[24px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>

          <Form
            className="w-full max-w-[392px] mt-[48px]"
            inputs={
              <>
                <Input variant="secondary" placeholder="Your name" />
                <Input variant="secondary" placeholder="E-mail address" />
                <Input variant="secondary" placeholder="Phone number" />
                <DownloadInput />
              </>
            }
            button={<Button className="mt-[29px]">Send a message</Button>}
          />
        </div>

        <div className="w-full max-w-[480px] md:max-w-none flex justify-center">
          <ImageOverlap />
        </div>
      </Container>
    </section>
  );
}
