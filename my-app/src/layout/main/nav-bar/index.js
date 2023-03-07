import * as s from "./styled";

function NavBar(props) {
  const { minPrice, maxPrice, setMaxPrice, setMinPrice, setIsOnFilter } = props;

  return (
    <s.Section>
      <s.Title>Preço</s.Title>
      <s.ContentNav>
        <s.Div>
          <s.SubTitle>Mínimo:</s.SubTitle>
          <s.SubTitle>R$ 0,00</s.SubTitle>
          <s.Input
            type="number"
            placeholder="R$ 0,00"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </s.Div>
        <s.Div>
          <s.SubTitle>Máximo:</s.SubTitle>
          <s.SubTitle>R$ 500,00</s.SubTitle>
          <s.Input
            type="number"
            placeholder="R$ 500,00"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </s.Div>
      </s.ContentNav>
      <s.Button onClick={() => setIsOnFilter(true)}>Aplicar Filtro</s.Button>
    </s.Section>
  );
}

export default NavBar;
