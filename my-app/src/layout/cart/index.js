import { Container } from "../container";
import Footer from "../footer";
import Basket from "./basket";
import { Image, SectionContainer } from "./styled";
import Summary from "./summary";

function Cart(props) {
  const { setIsOnCart, cart, setCart, changeScreen } = props;
  return (
    <Container>
      <SectionContainer>
        <Basket cart={cart} setCart={setCart} />
        <Summary setIsOnCart={setIsOnCart} changeScreen={changeScreen} />
      </SectionContainer>
    </Container>
    
    
  );
}

export default Cart;
