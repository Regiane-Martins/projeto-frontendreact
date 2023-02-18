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

  function selectedProducts(e, setState) {
    e.preventDefault();
    setState(e.target.value);
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
              <Button value="brinquedos" onClick={(e) => selectedProducts(e, setCategory)}>
                Brinquedos
              </Button>
            </ItemList>
            <ItemList>
              <Button value="calçados" onClick={(e) => selectedProducts(e, setCategory)}>
                Calçados
              </Button>
            </ItemList>
            <ItemList>
              <Button value="diario" onClick={(e) => selectedProducts(e, setCategory)}>
                Dia a Dia
              </Button>
            </ItemList>
            <ItemList>
              <Button value="escolar" onClick={(e) => selectedProducts(e, setCategory)}>
                Escolar
              </Button>
            </ItemList>
            <ItemList>
              <Button value="sono" onClick={(e) => selectedProducts(e, setCategory)}>
                Sono
              </Button>
            </ItemList>
            <ItemList>
              <Button value="todos" onClick={(e) => selectedProducts(e, setCategory)}>
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
            />
            <a href="/" >
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
