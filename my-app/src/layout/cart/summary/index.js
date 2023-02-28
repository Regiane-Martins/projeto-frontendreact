import { Container } from "../../container";
import {
  ContentPrice,
  Aside,
  SubTitle,
  Title,
  Section,
  Button,
  Total,
  Separator,
  Link,
} from "./styled";

function Summary(props) {
  const { setIsOnCart, changeScreen } = props;
  return (
    <Section>
      <Aside>
        <Title>resumo do pedido</Title>
        <ContentPrice>
          <SubTitle>1 produto</SubTitle>
          <SubTitle>R$ 5.000,00</SubTitle>
        </ContentPrice>
        <Separator />
        <ContentPrice>
          <Total>total</Total>
          <Total>R$ 5.000,00</Total>
        </ContentPrice>
        <Separator />
        <Button>Continuar</Button>
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeScreen("default");
          }}
        >
          Continuar comprando
        </Link>
      </Aside>
    </Section>
  );
}

export default Summary;
