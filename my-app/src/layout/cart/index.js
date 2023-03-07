import { Container } from "../container";
import Basket from "./basket";
import Summary from "./summary";
import * as s from "./styled";

function Cart(props) {
  const {
    cart,
    setCart,
    changeScreen,
    cartItems,
    setCartItems,
    totalItemCart,
    totalCart,
    saveCart,
  } = props;
  return (
    <Container>
      <s.SectionContainer>
        <Basket
          cart={cart}
          setCart={setCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
          saveCart={saveCart}
        />
        <Summary
          changeScreen={changeScreen}
          totalItemCart={totalItemCart}
          totalCart={totalCart}
        />
      </s.SectionContainer>
    </Container>
  );
}

export default Cart;
