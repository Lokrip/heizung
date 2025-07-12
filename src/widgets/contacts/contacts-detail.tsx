import { Button } from "@/shared/ui/kit/button";
import { Input } from "@/shared/ui/kit/input";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Textarea } from "@/shared/ui/kit/textarea";
import { Container } from "@/shared/ui/utils/container";
import { Form } from "@/shared/ui/utils/form";
import { Title } from "@/shared/ui/utils/title";

export function ContactsDetail() {
  return (
    <section className="mt-[82px]">
      <Container>
        <div>
          <TextWithLine text={"Our contacts"} />
          <Title className="mt-[6px]">
            We will be happy to discuss your project, please contact us
          </Title>

          <p className="mt-[12px] text-[13px] font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="flex gap-[25px]">
            <Form
              className="w-[392px] mt-[48px]"
              inputs={
                <>
                  <Input variant="secondary" placeholder="Your name" />
                  <Input variant="secondary" placeholder="E-mail address" />
                  <Input variant="secondary" placeholder="Phone number" />
                  <Textarea variant="secondary" placeholder="Write a message" />
                </>
              }
              button={<Button className="mt-[29px]">Send a message</Button>}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
