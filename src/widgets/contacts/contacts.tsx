import { Button } from "@/shared/ui/kit/button";
import { Input } from "@/shared/ui/kit/input";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Textarea } from "@/shared/ui/kit/textarea";
import { Container } from "@/shared/ui/utils/container";
import { Form } from "@/shared/ui/utils/form";
import { Title } from "@/shared/ui/utils/title";
import { ContactsCard } from "./contacts-card";

export function Contacts() {
  return (
    <section className="mt-[87px] py-[47px] bg-[#485769]">
      <Container className="flex flex-col lg:flex-row gap-[40px] lg:gap-[104px]">
        <Form
          className="w-full max-w-[392px]"
          inputs={
            <>
              <Input placeholder="Your name" />
              <Input placeholder="E-mail address" />
              <Input placeholder="Phone number" />
              <Textarea placeholder="Write a message" />
            </>
          }
          button={<Button className="mt-[29px]">Send a message</Button>}
        />

        <div className="w-full max-w-[432px]">
          <TextWithLine text={"Get a concultation"} />

          <Title className="max-w-[416px] mt-[6px] text-white">
            For immediate help
          </Title>

          <p className="text-[13px] font-medium opacity-60 mt-[24px] text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="flex flex-col gap-[24px] mt-[36px]">
            <ContactsCard
              image="/contacts/MdLocationPin.png"
              width={20}
              height={20}
              title="Visit us"
              description="Lychen, Beenzer Chaussee 9"
            />

            <ContactsCard
              image="/contacts/IoMdMail.png"
              width={20}
              height={20}
              title="Email address"
              description="hoff_heizung_sanitaer@t-online.de"
            />

            <ContactsCard
              image="/contacts/MdLocationPin.png"
              width={20}
              height={20}
              title="Call now"
              description="9039888/2611"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
