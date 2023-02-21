import { Content, Paragraph } from "../styled";
import {
  Button,
  ContentNav,
  Div,
  Input,
  Section,
  SubTitle,
  Title,
} from "./styled";

function NavBar(props) {
  const { minPrice, maxPrice, setMaxPrice, setMinPrice, setIsOnFilter } = props;

  return (
    <Section>
      <Title>Preço</Title>
      <ContentNav>
        <Div>
          <SubTitle>Mínimo:</SubTitle>
          <SubTitle>R$ 0,00</SubTitle>
          <Input
            type="number"
            placeholder="R$ 0,00"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </Div>
        <Div>
          <SubTitle>Máximo:</SubTitle>
          <SubTitle>R$ 500,00</SubTitle>
          <Input
            type="number"
            placeholder="R$ 500,00"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </Div>
      </ContentNav>
      <Button onClick={() => setIsOnFilter(true)}>Aplicar Filtro</Button>
    </Section>
  );
}

export default NavBar;
