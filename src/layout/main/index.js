import { Container } from "../container";
import Card from "./cards";
import NavBar from "./nav-bar";
import * as s from "./styled";

function Main(props) {
  const {
    products,
    setIsOnOrder,
    order,
    setOrder,
    quantityProducts,
    setMinPrice,
    setMaxPrice,
    setIsOnFilter,
    maxPrice,
    minPrice,
    cartItems,
    setCartItems,
  } = props;

  return (
    <Container>
      <s.FilterContent>
        <s.Label>Ordenar:</s.Label>
        <s.Selector
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
            setIsOnOrder(true);
          }}
        >
          <s.Options value={"default"}>Relevância</s.Options>
          <s.Options value={"min"}>Menor preço</s.Options>
          <s.Options value={"max"}>Maior preço</s.Options>
        </s.Selector>
      </s.FilterContent>
      <s.Section>
        <NavBar
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
          setIsOnFilter={setIsOnFilter}
        />
        <s.Content>
          <s.Div>
            <s.Paragraph>
              Quantidade de produtos: {quantityProducts()}
            </s.Paragraph>
          </s.Div>
          <s.DivCard>
            {products.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                cartItems={cartItems}
                setCartItems={setCartItems}
                products={products}
              />
            ))}
          </s.DivCard>
        </s.Content>
      </s.Section>
    </Container>
  );
}

export default Main;
