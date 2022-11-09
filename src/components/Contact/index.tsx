import React, { memo } from "react";
import Lottie from "lottie-react";
import { ImFacebook2 } from "react-icons/im";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { GrMap } from "react-icons/gr";

import { Banner, Container, ContactArea } from "./styles";

import ContactIMG from "../../../public/img/animation/cont2.json";
import ContactsIcons from "../ContactsIcons";

function Contact() {
  return (
    <Container>
      <Banner>
        <Lottie animationData={ContactIMG} />
      </Banner>

      <ContactArea>
        <ContactsIcons
          name="Facebook"
          icon={<ImFacebook2 color="#3B5998" fontSize="8rem" />}
          url="https://www.facebook.com/profile.php?id=100064102269111"
        />
        <ContactsIcons
          name="Whatsapp"
          icon={<SiWhatsapp color="#34af23" fontSize="8rem" />}
          url="https://api.whatsapp.com/send?phone=5514991961016&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida"
        />
        <ContactsIcons
          name="Instagram"
          icon={<SiInstagram color="#7344B6" fontSize="8rem" />}
          url="https://www.instagram.com/doceamor98/"
        />
        <ContactsIcons
          name="Localização"
          icon={<GrMap color="#E94235" fontSize="8rem" />}
          url="https://goo.gl/maps/8YxboHpy2NzDejcj7"
        />
      </ContactArea>
    </Container>
  );
}

export default memo(Contact);
