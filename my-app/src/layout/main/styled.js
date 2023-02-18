import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex: 1;
  padding: 40px 0;
`;

export const FilterContent = styled.div`
  text-align: end;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-right: 0.5vw;
`;

export const Selector = styled.select`
  border: 1px solid #cecece;
  font-size: 1rem;
  height: 3vh; // é correto usar vh?
  padding: 5px; //??
`;

export const Options = styled.option``;

export const Paragraph = styled.p`
  text-align: left;
`;

export const Separator = styled.hr`
  border: none;
  margin: 0;
`;

export const Content = styled.div`
  display: grid;
  gap: 1vw; // pode usar em vw?
  grid-template-columns: repeat(3, 1fr);
  padding-left: 1vw; // é correto?
`;
