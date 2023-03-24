import { Container } from "../container";
import * as s from "./styled";

function EmptyCart(props) {
  const { changeScreen } = props;
  return (
    <Container>
      <s.Content>
        <s.Title>Ops, seu carrinho está vazio.</s.Title>
        <s.Link href="/" onClick={(e) => changeScreen("default")}>
          Escolha seus produtos
        </s.Link>
      </s.Content>
    </Container>
  );
}

export default EmptyCart;
