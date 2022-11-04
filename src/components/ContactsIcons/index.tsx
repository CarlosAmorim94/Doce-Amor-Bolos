import Link from "next/link";
import { memo } from "react";
import { IconBaseProps } from "react-icons/lib";
import { Container } from "./styles";

type Props = IntrinsicAttributes & {
  name: string;
  icon: IconBaseProps;
  url: string;
};

function ContactsIcons({ name, icon, url }: Props) {
  return (
    <Link href={`${url}`} passHref={true}>
      <Container>
        <div>{icon}</div>
        <p>{name}</p>
      </Container>
    </Link>
  );
}

export default memo(ContactsIcons);
