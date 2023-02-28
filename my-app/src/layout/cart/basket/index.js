import { Container } from "../../container";
import {
  AddButton,
  Aside,
  Content,
  DecreaseButton,
  DivAmount,
  Remove,
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
          <SubTitle>produto</SubTitle>
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
              <DecreaseButton /> <AddButton />
            </DivAmount>
            <Remove href="/">Remover</Remove>
          </div>
          <div>R$ 5.000,00</div>
        </Content>
        <hr />
      </Container>
    </Section>
  );
}

export default Basket;
