import { Container } from "../../container";
import {
  AddButton,
  Aside,
  Content,
  DecreaseButton,
  DivAmount,
  Price,
  Remove,
  Section,
  Separator,
  SubTitle,
  Title,
  TitlePrimary,
} from "./styled";

function Basket(props) {
  const { cartItems } = props;
  return (
    <Section>
      <Container>
        <Title>minha cesta</Title>
        <Aside>
          <TitlePrimary>
            <SubTitle>produto</SubTitle>
          </TitlePrimary>
          <SubTitle>qtd.</SubTitle>
          <SubTitle>preço</SubTitle>
        </Aside>
        <hr />
        <Content>
          <div>
            <img src={cartItems.image} />
            <h3>{cartItems.name}</h3>
          </div>
          <Separator>
            <DivAmount>
              <DecreaseButton />
              {cartItems.amount} <AddButton />
            </DivAmount>
            <Remove href="/">Remover</Remove>
          </Separator>
          <Price>R$ {cartItems.price},00</Price>
        </Content>
        <hr />
      </Container>
    </Section>
  );
}

export default Basket;
