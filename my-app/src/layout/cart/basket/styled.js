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
`;

export const Div = styled.div``;

export const SubTitle = styled.p`
  color: #4a4a4a;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 1fr 1fr;
  padding-bottom: 2rem;
`;

export const DivAmount = styled.div`
  align-items: center;
  background-color: #cecece;
  border-radius: 50px;
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 5px;
  height: 25px;
  width: 90px;
`;
export const AddButton = styled.button`
  background: url(/img/add.png) transparent no-repeat;
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
