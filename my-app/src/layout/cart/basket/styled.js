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
`;

export const DivAmount = styled.div`
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 50px;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 5px;
  width: 80%;
`;

export const Image = styled.img`
  width: 14px;
`;

export const InputBasket = styled.input`
  background: none;
  border: none;
  text-align: center;
  outline: 0;
  width: 50px;
`;
