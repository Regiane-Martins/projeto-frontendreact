import * as s from "./styled";

function Summary(props) {
  const { changeScreen, totalItemCart, totalCart,  } = props;

  return (
    <s.Section>
      <s.Aside>
        <s.Title>resumo do pedido</s.Title>
        <s.ContentPrice>
          <s.SubTitle>{totalItemCart > 1 ? `${totalItemCart} produtos`: `${totalItemCart} produto` }</s.SubTitle>
          <s.SubTitle>R$ {totalCart},00</s.SubTitle>
        </s.ContentPrice>
        <s.Separator />
        <s.ContentPrice>
          <s.Total>total</s.Total>
          <s.Total>R$ {totalCart},00</s.Total>
        </s.ContentPrice>
        <s.Separator />
        <s.Button>Continuar</s.Button>
        <s.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeScreen("default");
          }}
        >
          Continuar comprando
        </s.Link>
      </s.Aside>
    </s.Section>
  );
}

export default Summary;
