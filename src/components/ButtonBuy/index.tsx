import Link from "next/link";
import React from "react";
import { Container } from "./styles";

type TextProps = {
  text: string;
};

export default function ButtonBuy({ text }: TextProps) {
  return (
    <Link href="/pedido">
      <Container>{text}</Container>
    </Link>
  );
}
