import { Container } from "../../container";
import { ItemList, Links, List, LogoIcon, Nav, NavContent } from "./styled";

function SubHeader(props) {
  const { changeScreen } = props;
  return (
    <Nav>
      <Container>
        <NavContent>
          <LogoIcon
            onClick={(e) => {
              e.preventDefault();
              changeScreen("default");
            }}
            src={process.env.PUBLIC_URL + "/img/logo2.svg"}
            alt="logo Astronauta"
          />
          <List>
            <ItemList>
              <Links href="/">Ajuda</Links>
            </ItemList>
            <ItemList>|</ItemList>
            <ItemList>
              <Links href="/">Acompanhe seu pedido</Links>
            </ItemList>
            <ItemList>|</ItemList>
            <ItemList>
              <Links href="/">Junte-se a nós</Links>
            </ItemList>
            <ItemList>|</ItemList>
            <ItemList>
              <Links href="/">Entrar</Links>
            </ItemList>
          </List>
        </NavContent>
      </Container>
    </Nav>
  );
}

export default SubHeader;
