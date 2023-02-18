import { Content, Paragraph } from "../styled";
import { Input, Section, SubTitle, Title } from "./styled";

function NavBar() {
  return (
    <Section>
      <Title>Preço</Title>
      <Content>
        <div>
      <SubTitle>Mínimo:</SubTitle>
      <SubTitle>R$ 0,00</SubTitle>
      <Input type="text" placeholder="R$ 0,00" />
      </div>
      <div>
      <SubTitle>Máximo:</SubTitle>
      <SubTitle>R$ 500,00</SubTitle>
      <Input type="text" placeholder="R$ 500,00" />
      <button>Aplicar Filtro</button>
      </div>
      
      </Content>
    </Section>
  );
}

export default NavBar;
