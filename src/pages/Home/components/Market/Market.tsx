import { CoffeeCard } from "./components/CoffeeCard";
import { Items, MarketContainer } from "./Market.styles";
import { useContext } from "react";
import { MarketContext } from "../../../../contexts/MarketContext";

export function Market() {
  const { products } = useContext(MarketContext);
  return (
    <MarketContainer>
      <h1>Nossos cafés</h1>

      <Items>
        {products?.map((product, index) => (
          <CoffeeCard
            key={index}
            id={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            tags={[...product.tags]}
            quantity={product.quantity}
            value={product.value}
          />
        ))}
      </Items>
    </MarketContainer>
  );
}
