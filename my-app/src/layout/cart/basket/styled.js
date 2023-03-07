import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  padding: 40px 0;
  flex: 1 1 66.66%;
`;

export const Title = styled.h2`
  color: #4a4a4a;
  font-size: 1.5rem;
  padding-bottom: 20px;
`;

export const Aside = styled.aside`
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 1fr 1fr;
  text-align: center;
`;

export const TitlePrimary = styled.div`
  text-align: left;
`;

export const Description = styled.h3`
  color: #4a4a4a;
`;

export const Division = styled.hr``;

export const Div = styled.div``;

export const SubTitle = styled.p`
  color: #4a4a4a;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  align-items: center;
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 1rem 0;
`;

export const Separator = styled.div`
  text-align: center;
`;

export const Products = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Image = styled.img`
  width: 60px;
`;

export const DivAmount = styled.div`
  align-items: center;
  background-color: #cecece;
  border-radius: 50px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 0.5rem;
  padding: 5px;
  height: 25px;
  width: 90px;
`;
export const AddButton = styled.button`
  background: url(/img/increase.svg) transparent no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  outline: 0;
  height: 18px;
  width: 18px;
`;

export const DecreaseButton = styled.button`
  background: url(/img/remove.svg) transparent no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  outline: 0;
  height: 18px;
  width: 18px;
`;

export const Remove = styled.a`
  color: #4a4a4a;
  font-size: 0.85rem;
  text-decoration: none;
  text-transform: lowercase;
  :hover {
    text-decoration: underline;
  }
`;

export const Price = styled.div``;
