import {
  CardContent,
  CardFooter,
  CardContainer,
  Tag,
  CardFooterValue,
  CardFooterQuantity,
  CardFooterAddCart,
  CardFooterButton,
  CardImage,
  TagContainer,
} from "./CoffeeCard.styles";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { MarketContext } from "../../../../../contexts/MarketContext";

interface ICoffeCard {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
  value: number;
  tags: TagOptions[];
  quantity: number;
}

export type TagOptions =
  | "TRADICIONAL"
  | "GELADO"
  | "COM LEITE"
  | "ESPECIAL"
  | "ALCOÓLICO";

export function CoffeeCard({
  id,
  imageSrc,
  title,
  description,
  value,
  tags,
  quantity,
}: ICoffeCard) {
  const { addToCart, addQuantityCart, deleteQuantityCart } =
    useContext(MarketContext);
  return (
    <CardContainer>
      <CardContent>
        <CardImage src={imageSrc} />
        <TagContainer>
          {tags?.map((tag, index) => (
            <Tag category={tag} key={index}>
              <p>{tag}</p>
            </Tag>
          ))}
        </TagContainer>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <CardFooterValue>
          R$ <span>{value.toFixed(2).replace(".", ",")}</span>
        </CardFooterValue>
        <CardFooterQuantity>
          <CardFooterButton onClick={() => deleteQuantityCart(id)}>
            <Minus />
          </CardFooterButton>
          <span>{quantity}</span>
          <CardFooterButton onClick={() => addQuantityCart(id)}>
            <Plus />
          </CardFooterButton>
        </CardFooterQuantity>
        <CardFooterAddCart title="add to cart" onClick={() => addToCart(id)}>
          <ShoppingCart weight="fill" size={22} />
        </CardFooterAddCart>
      </CardFooter>
    </CardContainer>
  );
}
