import styled from "styled-components";

export const Section = styled.section`
  background-color: #f7f7f7;
  flex: 1;
  line-height: 2;
  text-align: left;
  padding: 3vh 1vw; // pode em vh e vw?
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
`;

export const SubTitle = styled.p`
  font-size: 0.75rem;
  line-height: 1.25;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 5vw; // ??
`;

export const Button = styled.button`
  text-align: center;
  border: none;
  border-radius: 4px;
`;
