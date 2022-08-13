import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2rem 10rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 100%;
`;

export const CheckoutContainerLeft = styled.div`
  width: 60%;
`;

export const CheckoutContainerRight = styled.div`
  width: 40%;
`;

export const CheckoutContainerDivider = styled.div`
  width: 5%;
`;

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin-top: 44px;
  background-color: ${(props) => props.theme["gray-100"]};
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
      color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
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
  border: 1px solid ${(props) => props.theme["gray-400"]};
  background-color: ${(props) => props.theme["gray-300"]};
  width: ${(props) => (props.width ? props.width : 100)}%;

  /* &::before {
    position: absolute;
    content: ${(props) => (props.before ? `"${props.before}"` : "teste")};
  }

  &::after {
    position: absolute;
    content: ${(props) => (props.after ? `"${props.after}"` : "teste")};
  } */
`;

export const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin-top: 44px;
  background-color: ${(props) => props.theme["gray-100"]};
`;

export const CheckoutPaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin-top: 44px;
  background-color: ${(props) => props.theme["gray-100"]};
`;

export const CheckoutPaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 12px;

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

  border: 1px solid
    ${(props) =>
      props.selected ? props.theme["purple-500"] : props.theme["gray-300"]};
  
  background-color: ${(props) =>
    props.selected ? props.theme["purple-300"] : props.theme["gray-300"]};

  svg {
    width: 16px;
    height: 16px;
    margin-right: 13px;
    user-select: none;
    color: ${(props) => props.theme["purple-500"]};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 160%;
    text-transform: uppercase;
    user-select: none;
    color: ${(props) => props.theme["gray-700"]};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme["purple-500"]};
    background-color: ${(props) => props.theme["purple-300"]};
  }
`;
