import Header from "../components/Header";
import Hero from "../components/Hero";
import { Container, Content } from "../styles/styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <Hero />
      </Content>
    </Container>
  );
}
