import { Container } from "../../container";
import * as s from "./styled";

function MainHeader(props) {
  const {
    setIsOnFilter,
    category,
    setCategory,
    name,
    setName,
    changeScreen,
    totalItemCart,
  } = props;

  function selectedProducts(value) {
    setCategory(value);
    setIsOnFilter(true);
  }

  return (
    <s.Nav>
      <Container>
        <s.NavContent>
          <s.LogoIcon
            src={process.env.PUBLIC_URL + "/img/logo-principal.svg"}
            alt="logo Astronauta"
          />
          <s.List>
            <s.ItemList>
              <s.Link
                active={category === "brinquedos"}
                onClick={(e) => selectedProducts("brinquedos")}
              >
                Brinquedos
              </s.Link>
            </s.ItemList>
            <s.ItemList>
              <s.Link
                active={category === "calçados"}
                onClick={(e) => selectedProducts("calçados")}
              >
                Calçados
              </s.Link>
            </s.ItemList>
            <s.ItemList>
              <s.Link
                active={category === "diario"}
                onClick={(e) => selectedProducts("diario")}
              >
                Dia a Dia
              </s.Link>
            </s.ItemList>
            <s.ItemList>
              <s.Link
                active={category === "escolar"}
                onClick={(e) => selectedProducts("escolar")}
              >
                Escolar
              </s.Link>
            </s.ItemList>
            <s.ItemList>
              <s.Link
                active={category === "sono"}
                onClick={(e) => selectedProducts("sono")}
              >
                Sono
              </s.Link>
            </s.ItemList>
            <s.ItemList>
              <s.Link
                active={category === "todos"}
                onClick={(e) => selectedProducts("todos")}
              >
                Todos
              </s.Link>
            </s.ItemList>
          </s.List>
          <s.Section>
            <s.InputShearch
              type="text"
              name="name"
              placeholder="Buscar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setIsOnFilter(true)}
            />
            <s.Anchor
              href="/"
              onClick={(e) => {
                e.preventDefault();
                changeScreen("cart");
              }}
            >
              <s.Div>
                <s.TotalProducts>
                  {totalItemCart >= 1 ? `${totalItemCart}` : ""}
                </s.TotalProducts>
                <s.Basket
                  src={process.env.PUBLIC_URL + "/img/cart2.svg"}
                  alt="carrinho de compras"
                />
              </s.Div>
            </s.Anchor>
          </s.Section>
        </s.NavContent>
      </Container>
    </s.Nav>
  );
}

export default MainHeader;
