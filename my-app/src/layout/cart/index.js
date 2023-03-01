import { Container } from "../container";
import Footer from "../footer";
import Basket from "./basket";
import { Image, SectionContainer } from "./styled";
import Summary from "./summary";

function Cart(props) {
  const { setIsOnCart, cart, setCart, changeScreen, cartItems } = props;
  return (
    <Container>
      <SectionContainer>
        <Basket cart={cart} setCart={setCart} cartItems={cartItems} />
        <Summary setIsOnCart={setIsOnCart} changeScreen={changeScreen} />
      </SectionContainer>
    </Container>
    
    
  );
}

export default Cart;
