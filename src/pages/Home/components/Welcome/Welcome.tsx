import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import coffee from "../../../../assets/coffee.svg";

import {
  WelcomeContainer,
  LeftContainer,
  FeaturesContainer,
  FeatureItem,
  RightContainer,
} from "./Welcome.styles";

export function Welcome() {
  return (
    <WelcomeContainer>
      <LeftContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <FeaturesContainer>
          <FeatureItem statusColor="yellowDark">
            <ShoppingCart weight="fill" size={32} />
            <span>Compra simples e segura</span>
          </FeatureItem>
          <FeatureItem statusColor="gray">
            <Package weight="fill" size={32} />
            <span>Embalagem mantém o café intacto</span>
          </FeatureItem>
          <FeatureItem statusColor="yellow">
            <Timer weight="fill" size={32} />
            <span>Entrega rápida e rastreada</span>
          </FeatureItem>
          <FeatureItem statusColor="purple">
            <Coffee weight="fill" size={32} />
            <span>O café chega fresquinho até você</span>
          </FeatureItem>
        </FeaturesContainer>
      </LeftContainer>
      <RightContainer>
        <img src={coffee} alt="coffee" />
      </RightContainer>
    </WelcomeContainer>
  );
}
