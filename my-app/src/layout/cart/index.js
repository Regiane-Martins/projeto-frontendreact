
import { Container } from "../container"
import Basket from "./basket"
import { Image, SectionContainer } from "./styled"
import Summary from "./summary"


function Cart (props){
    const {setIsOnCart} = props
    return(
        <Container>
        <SectionContainer>
        <Basket/>
        <Summary setIsOnCart={setIsOnCart}/>
        </SectionContainer>
        </Container>
    )
}

export default Cart