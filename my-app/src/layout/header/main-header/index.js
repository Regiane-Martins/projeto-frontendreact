import { Container } from "../../container";
import {
  Basket,
  Button,
  ItemList,
  Links,
  List,
  LogoIcon,
  Nav,
  NavContent,
  Section,
} from "./styled";

function MainHeader(props) {
  const { setIsOnFilter, setCategory, name, setName } = props;

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
              <Button
                value="brinquedos"
                onClick={(e) => selectedProducts(e.target.value)}
              >
                Brinquedos
              </Button>
            </ItemList>
            <ItemList>
              <Button
                value="calçados"
                onClick={(e) => selectedProducts(e.target.value)}
              >
                Calçados
              </Button>
            </ItemList>
            <ItemList>
              <Button
                value="diario"
                onClick={(e) => selectedProducts(e.target.value)}
              >
                Dia a Dia
              </Button>
            </ItemList>
            <ItemList>
              <Button
                value="escolar"
                onClick={(e) => selectedProducts(e.target.value)}
              >
                Escolar
              </Button>
            </ItemList>
            <ItemList>
              <Button
                value="sono"
                onClick={(e) => selectedProducts(e.target.value)}
              >
                Sono
              </Button>
            </ItemList>
            <ItemList>
              <Button
                value="todos"
                onClick={(e) => selectedProducts(e.target.value)}
              >
                Todos
              </Button>
            </ItemList>
          </List>
          <Section>
            <input
              type="text"
              name="name"
              placeholder="Buscar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setIsOnFilter(true)}
            />
            <a href="/">
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
