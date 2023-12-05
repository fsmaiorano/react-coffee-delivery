import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const CheckoutContainerLeft = styled.div`
  width: 50%;
  min-width: 20px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const CheckoutContainerRight = styled.div`
  width: 50%;
  min-width: 20px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const CheckoutContainerDivider = styled.div`
  width: 50px;
  min-width: 20px;
`;

// Left

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin-top: 44px;
  background-color: ${props => props.theme["gray-100"]};
`;

const ICON_COLOR = {
  yellow: "yellow-500",
  purple: "purple-500",
} as const;

interface CheckoutTitleProps {
  iconColor: keyof typeof ICON_COLOR;
}

export const CheckoutTitle = styled.div<CheckoutTitleProps>`
  div {
    display: flex;
    gap: 8px;

    svg {
      width: 22px;
      height: 22px;
      color: ${props => props.theme[ICON_COLOR[props.iconColor]]};
    }

    div {
      display: flex;
      flex-direction: column;

      p:first-child {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 0.87rem;
        line-height: 130%;
      }
    }
  }
`;

export const CheckoutForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 32px;
  width: 100%;
`;

interface InputProps {
  width?: number;
  before?: string;
  after?: string;
}

export const CheckoutFormInput = styled.input<InputProps>`
  display: flex;
  align-items: center;
  position: relative;
  margin: 16px 0;
  padding: 12px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme["gray-400"]};
  background-color: ${props => props.theme["gray-300"]};
  width: ${props => (props.width ? props.width : 100)}%;

  /* &::before {
    position: absolute;
    content: ${props => (props.before ? `"${props.before}"` : "teste")};
  }

  &::after {
    position: absolute;
    content: ${props => (props.after ? `"${props.after}"` : "teste")};
  } */
`;

export const CheckoutPaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin-top: 44px;
  background-color: ${props => props.theme["gray-100"]};
`;

export const CheckoutPaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 186px);
  gap: 12px;

  width: 100%;

  margin-top: 32px;
`;

interface CheckoutPaymentOptionProps {
  selected?: boolean;
}

export const CheckoutPaymentOption = styled.button<CheckoutPaymentOptionProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 178.67px;
  height: 51px;
  cursor: pointer;

  border-radius: 6px;

  border: 1px solid ${props => (props.selected ? props.theme["purple-500"] : props.theme["gray-300"])};

  background-color: ${props => (props.selected ? props.theme["purple-300"] : props.theme["gray-300"])};

  svg {
    width: 16px;
    height: 16px;
    margin-right: 13px;
    user-select: none;
    color: ${props => props.theme["purple-500"]};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 160%;
    text-transform: uppercase;
    user-select: none;
    color: ${props => props.theme["gray-700"]};
  }

  &:hover {
    border: 1px solid ${props => props.theme["purple-500"]};
    background-color: ${props => props.theme["purple-300"]};
  }
`;

// Right

export const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin-top: 44px;
  background-color: ${props => props.theme["gray-100"]};
`;

export const CheckoutCartItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    width: 140px;
    height: 64px;
  }

  &:first-child {
    padding: 0px 0 24px 0;
    border-bottom: 1px solid ${props => props.theme["gray-400"]};
  }

  &:not(:first-child) {
    padding: 24px 0 24px 0;
    border-top: 1px solid ${props => props.theme["gray-400"]};
    border-bottom: 1px solid ${props => props.theme["gray-400"]};
  }
`;

export const CheckoutCartItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;

  p:first-child {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    float: left;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
      float: right;
    }
  }
`;

export const CheckoutCartItemFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  span {
  }
`;

export const CheckoutCartItemButton = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    color: ${props => props.theme["purple-700"]};

    &:hover {
      color: ${props => props.theme["purple-500"]};
    }
  }
`;

export const CheckoutCartItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background-color: ${props => props.theme["gray-400"]};
  cursor: pointer;
  border-radius: 6px;
`;

export const CheckoutCartItemRemove = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 35px;
  cursor: pointer;

  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme["gray-400"]};

  svg {
    width: 16px;
    height: 16px;
    margin-right: 13px;
    user-select: none;
    color: ${props => props.theme["purple-500"]};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 160%;
    text-transform: uppercase;
    user-select: none;
    color: ${props => props.theme["gray-700"]};
    text-transform: uppercase;
  }

  &:hover {
    border: 1px solid ${props => props.theme["purple-500"]};
    background-color: ${props => props.theme["purple-300"]};
  }
`;

export const CheckoutTotal = styled.div`
  width: 100%;

  > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${props => props.theme["gray-700"]};

    margin: 12px 0;

    &:first-of-type {
      margin: 0 0;
    }

    &:last-of-type {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;

      color: ${props => props.theme["gray-800"]};
    }

    > span {
      float: right;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    border-radius: 6px;
    cursor: pointer;

    width: 100%;
    height: 2.87rem;

    border: none;
    text-transform: uppercase;

    color: ${props => props.theme["white"]};
    background: ${props => props.theme["yellow-600"]};

    &:hover {
      background: ${props => props.theme["yellow-700"]};
    }

    &:disabled {
      background: ${props => props.theme["gray-500"]};
    }
  }
`;
