import * as s from "./styled";

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
      <s.Content>
        <s.Image src={image} alt="" />
        <s.Title>{name}</s.Title>
        <s.SubTitlePrice>R$ {price},00</s.SubTitlePrice>
        <s.Button
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
        </s.Button>
      </s.Content>
    </>
  );
}

export default Card;
