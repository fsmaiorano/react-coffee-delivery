import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 90rem;
  padding: 2rem 10rem;
  margin: 0 auto;

  img {
    width: 5.309rem;
    height: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 2rem;
`;

export const Location = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  border-radius: 8px;

  padding: 0.5rem;
  gap: 0.25rem;

  width: 143px;
  height: 38px;

  background-color: ${(props) => props.theme["purple-300"]};
  color: ${(props) => props.theme["purple-700"]};
`;

export const Cart = styled.button`
  border: none;
  background-color: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["yellow-700"]};
  border-radius: 8px;

  padding: 0.5rem;
  gap: 0.25rem;

  width: 38px;
  height: 38px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme["yellow-300"]};
  }
`;
