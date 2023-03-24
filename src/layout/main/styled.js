import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex: 1 1 66.66%;
  padding: 40px 0;
  width: 100%;
  gap: 15px;
`;

export const FilterContent = styled.div`
  text-align: end;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-right: 10px;
`;

export const Selector = styled.select`
  border: 1px solid #cecece;
  font-size: 1rem;
  padding: 5px;
`;

export const Options = styled.option``;

export const Paragraph = styled.p`
  text-align: left;
  padding-bottom: 20px;
`;

export const Div = styled.div``;

export const Content = styled.div``;

export const DivCard = styled.div`
  display: grid;
  gap: 20px 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-left: 20px;
`;
