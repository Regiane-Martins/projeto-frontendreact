import { Container } from "../../container";
import {
  Basket,
  Link,
  ItemList,
  List,
  LogoIcon,
  Nav,
  NavContent,
  Section,
  InputShearch,
} from "./styled";

function MainHeader(props) {
  const { setIsOnFilter, category, setCategory, name, setName, changeScreen } =
    props;

  function selectedProducts(value) {
    setCategory(value);
    setIsOnFilter(true);
  }

  return (
    <Nav>
      <Container>
        <NavContent>
          <LogoIcon
            src={process.env.PUBLIC_URL + "/img/logo-principal.svg"}
            alt="logo Astronauta"
          />
          <List>
            <ItemList>
              <Link
                active={category === "brinquedos"}
                onClick={(e) => selectedProducts("brinquedos")}
              >
                Brinquedos
              </Link>
            </ItemList>
            <ItemList>
              <Link
                active={category === "calçados"}
                onClick={(e) => selectedProducts("calçados")}
              >
                Calçados
              </Link>
            </ItemList>
            <ItemList>
              <Link
                active={category === "diario"}
                onClick={(e) => selectedProducts("diario")}
              >
                Dia a Dia
              </Link>
            </ItemList>
            <ItemList>
              <Link
                active={category === "escolar"}
                onClick={(e) => selectedProducts("escolar")}
              >
                Escolar
              </Link>
            </ItemList>
            <ItemList>
              <Link
                active={category === "sono"}
                onClick={(e) => selectedProducts("sono")}
              >
                Sono
              </Link>
            </ItemList>
            <ItemList>
              <Link
                active={category === "todos"}
                onClick={(e) => selectedProducts("todos")}
              >
                Todos
              </Link>
            </ItemList>
          </List>
          <Section>
            <InputShearch
              type="text"
              name="name"
              placeholder="Buscar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setIsOnFilter(true)}
            />
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                changeScreen("cart");
              }}
            >
              <Basket
                src={process.env.PUBLIC_URL + "/img/cart2.svg"}
                alt="carrinho de compras"
              />
            </a>
          </Section>
        </NavContent>
      </Container>
    </Nav>
  );
}

export default MainHeader;
