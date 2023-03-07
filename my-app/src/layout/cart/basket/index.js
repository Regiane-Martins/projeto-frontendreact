import { Container } from "../../container";
import * as s from "./styled";

function Basket(props) {
  const { cartItems, setCartItems, saveCart } = props;

  const handlerMinus = (index) => {
    const copyCartItems = [...cartItems];

    copyCartItems[index].amount -= 1;

    if (copyCartItems[index].amount <= 0) {
      return;
    }

    setCartItems(copyCartItems);
    saveCart(copyCartItems);
  };

  const handlerToAdd = (index) => {
    const copyCartItems = [...cartItems];
    copyCartItems[index].amount += 1;
    if (copyCartItems[index].amount <= 0) {
      return;
    }

    setCartItems(copyCartItems);
    saveCart(copyCartItems);
  };

  const toRemove = (index) => {
    const copyCartItems = [...cartItems];
    copyCartItems.splice(index, 1);
    setCartItems(copyCartItems);
  };

  const renderItem = (item, index) => {
    return (
      <s.Div>
        <s.Content>
          <s.Products>
            <s.Image src={item.image} />
            <s.Description>{item.name}</s.Description>
          </s.Products>
          <s.Separator>
            <s.DivAmount>
              <s.DecreaseButton onClick={() => handlerMinus(index)} />
              {item.amount} <s.AddButton onClick={() => handlerToAdd(index)} />
            </s.DivAmount>
            <s.Remove
              href="/"
              onClick={(e) => {
                e.preventDefault();
                toRemove(index);
              }}
            >
              Remover
            </s.Remove>
          </s.Separator>
          <s.Price>R$ {item.price},00</s.Price>
        </s.Content>
        <s.Division />
      </s.Div>
    );
  };

  return (
    <s.Section>
      <Container>
        <s.Title>minha cesta</s.Title>
        <s.Aside>
          <s.TitlePrimary>
            <s.SubTitle>produto</s.SubTitle>
          </s.TitlePrimary>
          <s.SubTitle>qtd.</s.SubTitle>
          <s.SubTitle>preço</s.SubTitle>
        </s.Aside>
        <s.Division />
        {cartItems.map((item, index) => renderItem(item, index))}
      </Container>
    </s.Section>
  );
}

export default Basket;
