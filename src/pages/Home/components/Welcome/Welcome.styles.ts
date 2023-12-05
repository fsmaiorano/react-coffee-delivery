import styled from "styled-components";

export const WelcomeContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  height: 544px;
`;

export const LeftContainer = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  h2 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    margin: 1rem auto 3rem auto;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 0.875rem;
    }
  }
`;

export const RightContainer = styled.div`
  img {
    width: 150%;
    min-width: 200px;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 19rem);
  grid-template-rows: repeat(2, 4rem);
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 4rem);
  }
`;

const STATUS_COLORS = {
  yellowDark: "yellow-700",
  yellow: "yellow-600",
  purple: "purple-500",
  gray: "gray-700",
} as const;

interface FeaturesItemProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const FeatureItem = styled.p<FeaturesItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme["gray-700"]};
    width: 187px;
    height: 21px;
    white-space: nowrap;
  }

  svg {
    width: 38px;
    height: 38px;
    padding: 8px;
    border-radius: 99px;
    background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    color: ${props => props.theme["white"]};
  }
`;
