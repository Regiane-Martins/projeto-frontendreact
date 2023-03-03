import { Container } from "../../container";
import * as s from './styled'


function Basket(props) {
  const { cartItems } = props;

  const handlerMinus = ()=>{
    
  }

  const renderItem = (e)=>{
    console.log(e)
    return(
      <s.Div>
        <s.Content>
          <s.Products>
            <s.Image src={e.image} />
            <s.Description>{e.name}</s.Description>
          </s.Products>
          <s.Separator>
            <s.DivAmount>
              <s.DecreaseButton />
              {e.amount} <s.AddButton />
            </s.DivAmount>
            <s.Remove href="/">Remover</s.Remove>
          </s.Separator>
          <s.Price>R$ {e.price},00</s.Price>
        </s.Content>
        <s.Division />
      </s.Div>
    )
  }


  return (
    <s.Section>
      <Container>
      <s.Title>minha cesta</s.Title>
      <s.Aside>
          <s.TitlePrimary>
            <s.SubTitle>produto</s.SubTitle>
          </s.TitlePrimary>
          <s.SubTitle>qtd.</s.SubTitle>
          <s.SubTitle>preço</s.SubTitle>
        </s.Aside>
        <s.Division />
        {
          cartItems.map((e)=> renderItem(e
            ))
        }
      </Container>
    </s.Section>
  );
}

export default Basket;
