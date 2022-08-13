import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  margin: 60px auto;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["gray-100"]};

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 2rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-700"]};
    margin: 8px auto;
  }

  p {
    margin: 0 26px;
    color: ${(props) => props.theme["gray-600"]};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.87rem;
    line-height: 130%;
    text-align: center;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
`;

export const CardImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const TagContainer = styled.div`
  position: relative;
  display: flex;
  margin: 10px auto;
  gap: 0.3rem;
`;

interface TagProps {
  category: "TRADICIONAL" | "ESPECIAL" | "GELADO" | "ALCOÓLICO" | "COM LEITE";
}

export const Tag = styled.div<TagProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 99px;
  height: 21px;

  background-color: ${(props) => props.theme["yellow-300"]};

  width: ${(props) => {
    if (props.category === "TRADICIONAL") {
      return "75px";
    } else if (props.category === "ESPECIAL") {
      return "60px";
    } else if (props.category === "GELADO") {
      return "60px";
    } else if (props.category === "ALCOÓLICO") {
      return "80px";
    } else if (props.category === "COM LEITE") {
      return "80px";
    } else {
      return "100px";
    }
  }};

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 0.62rem;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-700"]};
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;

  margin: 20px auto;
`;

export const CardFooterValue = styled.div`
  margin-left: 35px;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 130%;

    width: 67px;
    height: 31px;
  }

  span {
    width: 67px;
    height: 31px;

    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`;

export const CardFooterButton = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme["purple-700"]};

    &:hover {
      color: ${(props) => props.theme["purple-500"]};
    }
  }
`;

export const CardFooterQuantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background-color: ${(props) => props.theme["gray-400"]};
  cursor: pointer;
  span {
  }
`;

export const CardFooterAddCart = styled.button`
  margin-right: 35px;
  border: none;
  background-color: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme["white"]};
  border-radius: 8px;

  padding: 0.5rem;
  gap: 0.25rem;

  width: 38px;
  height: 38px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["purple-500"]};
    color: ${(props) => props.theme["white"]};
  }
`;
