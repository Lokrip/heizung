import { Button } from "@/shared/ui/kit/button";
import { Input } from "@/shared/ui/kit/input";
import { TextWithLine } from "@/shared/ui/kit/text-with-line";
import { Textarea } from "@/shared/ui/kit/textarea";
import { Container } from "@/shared/ui/utils/container";
import { Form } from "@/shared/ui/utils/form";
import { Title } from "@/shared/ui/utils/title";
import { ContactsCard } from "./contacts-card";
import Image from "next/image";
import Link from "next/link";

export function ContactsDetail() {
  return (
    <section className="mt-[82px]">
      <Container className="flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-start">
        <div className="flex-1">
          <TextWithLine text={"Our contacts"} />
          <Title className="mt-[6px]">
            We will be happy to discuss your project, please contact us
          </Title>

          <p className="mt-[12px] text-[13px] font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="flex flex-col md:flex-row gap-[25px] mt-[48px]">
            <Form
              className="w-full max-w-md"
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

            <div className="flex flex-col gap-[24px] mt-8 md:mt-0">
              <ContactsCard
                image="/contacts/MdLocationPin.png"
                width={20}
                height={20}
                title="Visit us"
                description="Lychen, Beenzer Chaussee 9"
                isTextBlack
              />

              <ContactsCard
                image="/contacts/IoMdMail.png"
                width={20}
                height={20}
                title="Email address"
                description="hoff_heizung_sanitaer@t-online.de"
                isTextBlack
              />

              <ContactsCard
                image="/contacts/MdLocationPin.png"
                width={20}
                height={20}
                title="Call now"
                description="9039888/2611"
                isTextBlack
              />

              <div className="flex flex-col gap-[11px] mt-[68px]">
                <h6 className="text-[13px] font-medium">
                  Follow us on social networks
                </h6>

                <div className="flex items-center gap-[24px] mt-[11px]">
                  <Link href={"#"}>
                    <Image
                      src={"/contacts/AiOutlineTwitter.png"}
                      alt="twitter"
                      width={24}
                      height={24}
                    />
                  </Link>

                  <Link href={"#"}>
                    <Image
                      src={"/contacts/AiFillFacebook.png"}
                      alt="facebook"
                      width={24}
                      height={24}
                    />
                  </Link>

                  <Link href={"#"}>
                    <Image
                      src={"/contacts/AiOutlineInstagram.png"}
                      alt="instagram"
                      width={24}
                      height={24}
                    />
                  </Link>

                  <Link href={"#"}>
                    <Image
                      src={"/contacts/AiOutlineYoutube.png"}
                      alt="youtube"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[600px] h-[300px] md:h-[549px] rounded-[10px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4916.711172911772!2d74.5994002640439!3d42.88352406522383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b0b21e5d2b%3A0xc4eac3570c76e69b!2sSomeWhere%20Bistro!5e0!3m2!1sru!2skg!4v1752289064799!5m2!1sru!2skg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
