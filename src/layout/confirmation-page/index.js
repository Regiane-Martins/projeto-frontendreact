import { Container } from "../container";
import * as s from "./styled";

function ConfirmationPage(props) {
  const { changeScreen } = props;
  return (
    <>
      <Container>
        <s.Title>Pedido confirmado</s.Title>
        <s.Content>
          <s.SubTitle>Seu pedido foi realizado com sucesso.</s.SubTitle>
          <s.SubTitle>
            Em breve você receberá um e-mail com todos os detalhes de seu
            pedido.
          </s.SubTitle>
          <s.SubTitle>Obrigado por sua compra.</s.SubTitle>
          <s.Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              changeScreen("default");
            }}
          >
            Continuar comprando
          </s.Link>
        </s.Content>
      </Container>
    </>
  );
}

export default ConfirmationPage;
