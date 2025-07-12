import { ContactsDetail } from "@/widgets/contacts";
import { MainScreen } from "@/widgets/main-screen";
import Image from "next/image";

export default function Contacts() {
  return (
    <>
      <MainScreen
        image={
          <Image
            src="/contacts-main-image.png"
            width={1440}
            height={419}
            alt="Background"
            className="w-full h-full object-cover"
          />
        }
        title={"Our Works"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }
        buttonText={"Join us"}
      />

      <ContactsDetail />
    </>
  );
}
