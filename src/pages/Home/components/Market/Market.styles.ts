import styled from "styled-components";

export const MarketContainer = styled.div`
  padding: 2rem 10rem;
  
  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const Items = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 1.5rem;
`;
