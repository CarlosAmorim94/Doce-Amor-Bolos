import Header from "../components/Header/indext";
import { Container, Content } from "../styles/styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <div>
          <div>
            <h2>Imagem do bolo</h2>
          </div>
          <div>
            <h2>descrição</h2>
          </div>
        </div>
      </Content>
    </Container>
  );
}
