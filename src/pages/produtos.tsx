import Header from "../components/Header";
import { Products } from "../components/Products";
import { Container, Content } from "../styles/styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <Products />
      </Content>
    </Container>
  );
}
