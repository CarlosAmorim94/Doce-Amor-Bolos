import React, { memo } from "react";
import Lottie from "lottie-react";
import ButtonBuy from "../ButtonBuy";

import { Banner, Container, Description, Text } from "./styles";

import Cake from "../../../public/img/animation/cakehome.json";

function Hero() {
  return (
    <Container>
      <Banner>
        <Lottie animationData={Cake} />
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
