import styled from "styled-components";

export const DeliveryContainer = styled.div`
  padding: 2rem 10rem;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${props => props.theme["yellow-700"]};
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${props => props.theme["gray-800"]};
  }
`;

export const DeliveryConfirmation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeliveryConfirmationDetail = styled.div`
  margin-top: 40px;
  width: 526px;
  height: 270px;
  border-radius: 6px 36px;
  border: 0.1rem solid transparent;
  background: linear-gradient(to right, ${props => props.theme["yellow-600"]}, ${props => props.theme["purple-500"]}) border-box;

  > div {
    border: 1px solid white;
    border-radius: 6px 33.9px;
    background-color: ${props => props.theme["white"]};
    height: 100%;
  }
`;

export const DeliveryConfirmationDetailItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  margin: 35px 40px;

  width: 354px;
  height: 42px;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
`;

const ICON_COLOR = {
  white: "white",
  yellow: "yellow-500",
  purple: "purple-500",
} as const;

const BACKGROUND_ICON_COLOR = {
  yellow: "yellow-500",
  purple: "purple-500",
} as const;

interface DeliveryConfirmationDetailItemIconProps {
  iconColor: keyof typeof ICON_COLOR;
  backgroundIconColor: keyof typeof BACKGROUND_ICON_COLOR;
}

export const DeliveryConfirmationDetailItemIcon = styled.div<DeliveryConfirmationDetailItemIconProps>`
  padding: 6px;
  width: 32px;
  height: 32px;
  border: none;
  color: ${props => props.theme[ICON_COLOR[props.iconColor]]};
  background-color: ${props => props.theme[ICON_COLOR[props.backgroundIconColor]]};
  border-radius: 1000px;
`;
