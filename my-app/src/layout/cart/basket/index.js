import { Container } from "../../container";
import {
    Aside,
  Content,
  Div,
  DivAmount,
  Image,
  Input,
  InputBasket,
  Section,
  SubTitle,
  Title,
} from "./styled";

function Basket() {
  return (
    <Section>
      <Container>
        <Title>minha cesta</Title>
        <Aside>
            <Div>
        <SubTitle>produto</SubTitle>
        </Div>
        <SubTitle>qtd.</SubTitle>
        <SubTitle>preço</SubTitle>
        </Aside>
        <hr />
        <Content>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div>
            <DivAmount>
              <Image src={process.env.PUBLIC_URL + "/img/remove.svg"} />
              <InputBasket type="tel" min="1" />
              <Image src={process.env.PUBLIC_URL + "/img/add.svg"} />
            </DivAmount>
          </div>
          <div>R$ 5.000,00</div>
        </Content>
        <hr />
      </Container>
    </Section>
  );
}

export default Basket;
