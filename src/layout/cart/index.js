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
    screen,
    totalItemCart,
    totalCart,
  } = props;
  return (
    <Container>
      <s.SectionContainer>
        <Basket
          cart={cart}
          setCart={setCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <Summary
          changeScreen={changeScreen}
          screen={screen}
          totalItemCart={totalItemCart}
          totalCart={totalCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </s.SectionContainer>
    </Container>
  );
}

export default Cart;
