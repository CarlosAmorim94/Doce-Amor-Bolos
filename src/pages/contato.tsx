import React, { memo } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import { Container, Content } from "../styles/styles";

function contato() {
  return (
    <Container>
      <Content>
        <Header />
        <Contact />
      </Content>
    </Container>
  );
}

export default memo(contato);
