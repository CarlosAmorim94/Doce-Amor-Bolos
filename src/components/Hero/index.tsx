import Image from "next/image";
import React, { memo } from "react";
import ButtonBuy from "../ButtonBuy";
import { Banner, Container, Description, Text } from "./styles";
import Cake from "/public/img/2.gif";

function Hero() {
  return (
    <Container>
      <Banner>
        <Image src={Cake} alt="cake" height={500} />
      </Banner>

      <Description>
        <Text>
          Deliciosos bolos e sobremesas feitas com carinho por{" "}
          <span>Doce Amor</span>
        </Text>
        <ButtonBuy text="Experimente!" />
      </Description>
    </Container>
  );
}

export default memo(Hero);
