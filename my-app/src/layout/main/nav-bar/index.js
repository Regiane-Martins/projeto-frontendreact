import { Content, Paragraph } from "../styled";
import { Button, ContentNav, Div, Input, Section, SubTitle, Title } from "./styled";

function NavBar() {
  return (
    <Section>
      <Title>Preço</Title>
      <ContentNav>
        <Div>
          <SubTitle>Mínimo:</SubTitle>
          <SubTitle>R$ 0,00</SubTitle>
          <Input type="text" placeholder="R$ 0,00" />
        </Div>
        <Div>
          <SubTitle>Máximo:</SubTitle>
          <SubTitle>R$ 500,00</SubTitle>
          <Input type="text" placeholder="R$ 500,00" />
        </Div>
      </ContentNav>
      <Button>Aplicar Filtro</Button>
    </Section>
  );
}

export default NavBar;
