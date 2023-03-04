import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;

  :hover {
    border-radius: 5px;
    box-shadow: 0px 0px 1em #888;
  }
`;

export const Image = styled.img`
  padding-top: 1rem;
  text-align: center;
  width: 70%;
`;

export const Title = styled.h3``;

export const Button = styled.button`
  background-color: #696969;
  border: 1px solid #cecece;
  color: #fff;
  margin-bottom: 10px;
  text-transform: lowercase;
  :hover {
    background-color: #fff;
    color: #696969;
  }
`;
