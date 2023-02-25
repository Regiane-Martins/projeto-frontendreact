import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 0;
`;

export const Aside = styled.aside`
  background-color: #f7f7f7;
  width: 1 1 33.33%;
  min-width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export const Separator = styled.hr`
    width: 100%;
`

export const Title = styled.h2`
  color: #4a4a4a;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;

export const ContentPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitle = styled.p`
  color: #4a4a4a;
  padding: 16px 0;
`;

export const Total = styled.p`
    font-weight: 700;
    padding: 16px 0;
`

export const Button = styled.button`
  background-color: #757575;
  border: none;
  border-radius: 4px;
  color: #f7f7f7;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;
  margin: 20px 0;
  text-transform: lowercase;
  :hover{
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
    color: #4a4a4a;
    text-align: center;
    text-decoration: none;
    text-transform: lowercase;
    :hover{
        text-decoration: underline;
    }
`
