import { Title } from "../../footer/main-footer/assistant/styled";
import { Paragraph } from "../styled";
import { Button, Content, Image } from "./styled";

function Card(props) {
  const { name, image, price, id, cartItems, setCartItems } = props;

  function addItemToCart(product) {
    const copyCartItems = [...cartItems]

    








  }

  return (
    <>
      <Content>
        <Image src={image} alt="" />
        <h3>{name}</h3>
        <p>R$ {price},00</p>
        <Button
          onClick={() =>
            addItemToCart({
              id,
              image,
              price,
            })
          }
        >
          Adicionar ao carrinho
        </Button>
      </Content>
    </>
  );
}

export default Card;
