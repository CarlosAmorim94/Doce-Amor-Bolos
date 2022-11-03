import Image from "next/image";
import React, { memo } from "react";
import LogoImg from "/public/img/logo.png";

import { BuyButton, Container, Navbar } from "./styles";
import Link from "next/link";

function Header() {
  return (
    <Container>
      <Link href="/">
        <Image
          src={LogoImg}
          alt="Logotipo de Doce Amor Bolos, fundo rosa com um circulo no meio, desenho de bolos e borboletas voando, com a frase: Doce Amor no meio"
          width={128}
        />
      </Link>

      <Navbar>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Contato</Link>
        </li>
        <li>
          <Link href="/">
            <BuyButton>Comprar</BuyButton>
          </Link>
        </li>
      </Navbar>
    </Container>
  );
}

export default memo(Header);
