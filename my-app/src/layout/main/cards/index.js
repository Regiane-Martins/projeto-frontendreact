import { Title } from "../../footer/main-footer/assistant/styled";
import { Paragraph } from "../styled";
import { Button, Content, Image } from "./styled";

function Card(props) {
  const { name, image, price, id, cartItems, setCartItems } = props;

  function addItemToCart(props) {
    const { id, name, price, image } = props;

    const copyCartItems = [...cartItems];
    let result = [];
    let newCart = [];

    if (copyCartItems.length) {
      result = copyCartItems.filter((e) => e.id === id);
    }

    if (!result.length) {
      newCart = [
        ...cartItems,
        {
          id: id,
          name: name,
          image: image,
          price: price,
          amount: 1,
        },
      ];
    } else {
      newCart = copyCartItems.map((item) => {
        if (item.id === id) {
          item.amount++;
        }
        return item;
      });
    }

    setCartItems(newCart);
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
              name,
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
