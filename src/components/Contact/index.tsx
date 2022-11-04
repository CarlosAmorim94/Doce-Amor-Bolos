import React, { memo } from "react";
import Lottie from "lottie-react";
import { ImFacebook2 } from "react-icons/im";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { GrMap } from "react-icons/gr";

import { Banner, Container, ContactArea, Icons } from "./styles";

import ContactIMG from "../../../public/img/animation/cont.json";

function Contact() {
  return (
    <Container>
      <Banner>
        <Lottie animationData={ContactIMG} />
      </Banner>

      <ContactArea>
        <Icons>
          <ImFacebook2 color="#3B5998" fontSize="8rem" />
          <p>Facebook</p>
        </Icons>
        <Icons>
          <SiWhatsapp color="#34af23" fontSize="8rem" />
          <p>Whatsapp</p>
        </Icons>
        <Icons>
          <SiInstagram color="#7344B6" fontSize="8rem" />
          <p>Instagram</p>
        </Icons>
        <Icons>
          <GrMap color="#E94235" fontSize="8rem" />
          <p>Localização</p>
        </Icons>
      </ContactArea>
    </Container>
  );
}

export default memo(Contact);
