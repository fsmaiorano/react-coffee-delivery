import traditional_espresso from "../assets/market/traditional_espresso.svg";
import american_espresso from "../assets/market/american_espresso.svg";
import creamy_espresso from "../assets/market/creamy_espresso.svg";
import iced_espresso from "../assets/market/iced_espresso.svg";
import coffee_with_milk from "../assets/market/coffee_with_milk.svg";
import latte from "../assets/market/latte.svg";
import capuccino from "../assets/market/capuccino.svg";
import arabic from "../assets/market/arabic.svg";
import irish from "../assets/market/irish.svg";
import mocaccino from "../assets/market/mocaccino.svg";
import cuban from "../assets/market/cuban.svg";
import hawaiian from "../assets/market/hawaiian.svg";
import hot_chocolate from "../assets/market/hot_chocolate.svg";
import macchiato from "../assets/market/macchiato.svg";

import { createContext, useState } from "react";
import { TagOptions } from "../pages/Home/components/Market/components/CoffeeCard";

interface IMakerContextProps {
  children: React.ReactNode;
}

interface IMarketContext {
  products: ProductItem[];
  checkoutProducts: ProductItem[];
  addQuantityCart: (productId: number) => void;
  subtractQuantityCart: (productId: number) => void;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

interface ProductItem {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
  tags: TagOptions[];
  value: number;
  quantity: number;
}

export const MarketContext = createContext({} as IMarketContext);

const defaultMarketItems: ProductItem[] = [
  {
    id: 1,
    imageSrc: traditional_espresso,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["TRADICIONAL", "GELADO"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    imageSrc: american_espresso,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["TRADICIONAL"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 3,
    imageSrc: creamy_espresso,
    title: "Expresso Cremeso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["TRADICIONAL"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 4,
    imageSrc: iced_espresso,
    title: "Expresso Gelado",
    description: "Café expresso tradicional com água gelada",
    tags: ["TRADICIONAL", "GELADO"],
    value: 9.9,
    quantity: 1,
  },

  {
    id: 5,
    imageSrc: coffee_with_milk,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 6,
    imageSrc: latte,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 7,
    imageSrc: capuccino,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 8,
    imageSrc: macchiato,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 9,
    imageSrc: mocaccino,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 10,
    imageSrc: hot_chocolate,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["ESPECIAL", "COM LEITE"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 11,
    imageSrc: cuban,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 12,
    imageSrc: hawaiian,
    title: "Havaiano",
    description: "Bebida adocicada com café e leite de coco",
    tags: ["ESPECIAL"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 13,
    imageSrc: arabic,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["ESPECIAL"],
    value: 9.9,
    quantity: 1,
  },
  {
    id: 14,
    imageSrc: irish,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["TRADICIONAL", "ALCOÓLICO"],
    value: 9.9,
    quantity: 1,
  },
];

export function MarketContextProvider({ children }: IMakerContextProps) {
  const [products, setProducts] = useState<ProductItem[]>([
    ...defaultMarketItems,
  ]);

  const [checkoutProducts, setCheckoutProducts] = useState<ProductItem[]>([]);

  function addQuantityCart(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      product.quantity = product.quantity >= 1 ? product.quantity + 1 : 1;
      setProducts([...products]);

      const checkoutProduct = checkoutProducts.find((p) => p.id === productId);
      if (checkoutProduct) {
        checkoutProduct.quantity = checkoutProduct.quantity + 1;
        setCheckoutProducts([...checkoutProducts]);
      }
    }
  }

  function subtractQuantityCart(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      product.quantity = product.quantity >= 2 ? product.quantity - 1 : 1;
      setProducts([...products]);

      const checkoutProduct = checkoutProducts.find((p) => p.id === productId);
      if (checkoutProduct) {
        checkoutProduct.quantity = checkoutProduct.quantity - 1;
        setCheckoutProducts([...checkoutProducts]);
      }
    }
  }

  function addToCart(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      const productCheckout = checkoutProducts.find((p) => p.id === productId);
      if (productCheckout === undefined) {
        const newProduct = { ...product };
        setCheckoutProducts([...checkoutProducts, newProduct]);
      } else {
        setCheckoutProducts([productCheckout]);
      }
    }
  }

  function removeFromCart(productId: number) {
    const product = checkoutProducts.find((p) => p.id === productId);
    if (product) {
      const newProducts = checkoutProducts.filter((p) => p.id !== productId);
      setCheckoutProducts([...newProducts]);
    }
  }

  return (
    <MarketContext.Provider
      value={{
        products,
        checkoutProducts,
        addToCart,
        addQuantityCart,
        subtractQuantityCart,
        removeFromCart,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}
