import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutTitle,
  CheckoutForm,
  CheckoutFormInput,
  CheckoutCartContainer,
  CheckoutContainerLeft,
  CheckoutContainerRight,
  CheckoutContainerDivider,
  CheckoutPaymentMethodContainer,
  CheckoutPaymentOption,
  CheckoutPaymentOptions,
  CheckoutCartItem,
  CheckoutCartItemDetails,
  CheckoutCartItemFooter,
  CheckoutCartItemButton,
  CheckoutCartItemQuantity,
  CheckoutCartItemRemove,
  CheckoutTotal,
} from "./Checkout.styles";

import { MapPinLine, CurrencyDollar, Money, CreditCard, Bank, Minus, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { checkoutTotal, deliveryAddress, MarketContext, Order, PaymentMethod, ProductItem } from "../../../../contexts/MarketContext";
import { useForm } from "react-hook-form";

export function Checkout() {
  const [checkout, setCheckout] = useState<checkoutTotal>({
    total: 0,
    quantity: 0,
    deliveryTax: 0,
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();
  const { handleOrder, checkoutProducts, removeFromCart, addQuantityCart, subtractQuantityCart } = useContext(MarketContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<deliveryAddress>();

  console.log(errors);

  function handlePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod);
  }

  function handleCartValues() {
    let total = checkoutProducts.reduce((acc, curr) => {
      return acc + curr.value * curr.quantity;
    }, 0);

    let quantity = checkoutProducts.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    const deliveryTax = 2.5;
    total > 0 ? (total = total + deliveryTax) : 0;
    setCheckout({ total, quantity, deliveryTax });
  }

  const onSubmit = (da: deliveryAddress) => {
    debugger;

    let order = {
      orderedProducts: checkoutProducts,
      paymentMethod: paymentMethod,
      checkoutTotal: checkout,
      deliveryAddress: {
        city: da.city,
        district: da.district,
        complement: da.complement,
        number: da.number,
        state: da.state,
        street: da.street,
      },
    } as Order;

    reset();
  };

  useEffect(() => {
    handleCartValues();
  }, [checkoutProducts]);

  const isValidForm = true;

  return (
    <CheckoutContainer>
      <CheckoutContainerLeft>
        <h1>Complete o seu pedido</h1>

        <CheckoutFormContainer onSubmit={handleSubmit(onSubmit)} id="form">
          <CheckoutTitle iconColor="yellow">
            <div>
              <MapPinLine />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
          </CheckoutTitle>
          <CheckoutForm>
            <CheckoutFormInput placeholder="CEP" width={28} type="number" {...register("postalcode", { required: false, maxLength: 7 })} />
            <CheckoutFormInput placeholder="Rua" width={100} {...register("street", { required: false, pattern: /^[A-Za-z]+$/i })} />
            <CheckoutFormInput placeholder="Número" width={28} type="number" {...(register("number", { required: false }), { min: 0 })} />
            <CheckoutFormInput placeholder="Complemento" width={70} after="opcional" {...register("complement", { required: false })} />
            <CheckoutFormInput placeholder="Bairro" width={28} {...register("district", { required: false, pattern: /^[A-Za-z]+$/i })} />
            <CheckoutFormInput placeholder="Cidade" width={60} {...register("city", { required: false, pattern: /^[A-Za-z]+$/i })} />
            <CheckoutFormInput
              placeholder="UF"
              width={8}
              {...register("state", { required: false, minLength: 2, maxLength: 2, pattern: /^[A-Za-z]+$/i })}
            />
          </CheckoutForm>
        </CheckoutFormContainer>

        <CheckoutPaymentMethodContainer>
          <CheckoutTitle iconColor="purple">
            <div>
              <CurrencyDollar />
              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
          </CheckoutTitle>
          <CheckoutPaymentOptions>
            <CheckoutPaymentOption
              selected={paymentMethod === PaymentMethod.CREDIT_CARD}
              onClick={() => handlePaymentMethod(PaymentMethod.CREDIT_CARD)}
            >
              <CreditCard />
              <p>CARTÃO DE CRÉDITO</p>
            </CheckoutPaymentOption>
            <CheckoutPaymentOption selected={paymentMethod === PaymentMethod.BANK} onClick={() => handlePaymentMethod(PaymentMethod.BANK)}>
              <Bank />
              <p>CARTÃO DE DÉBITO</p>
            </CheckoutPaymentOption>
            <CheckoutPaymentOption
              selected={paymentMethod === PaymentMethod.MONEY}
              onClick={() => handlePaymentMethod(PaymentMethod.MONEY)}
            >
              <Money />
              <p>DINHEIRO</p>
            </CheckoutPaymentOption>
          </CheckoutPaymentOptions>
        </CheckoutPaymentMethodContainer>
      </CheckoutContainerLeft>
      <CheckoutContainerDivider />
      <CheckoutContainerRight>
        <h1>Cafés selecionados</h1>
        <CheckoutCartContainer>
          {checkoutProducts?.map((product, index) => (
            <CheckoutCartItem key={index}>
              <img src={product.imageSrc} />
              <CheckoutCartItemDetails>
                <p>
                  {product.title} <span>R$ {product.value.toFixed(2).replace(".", ",")}</span>
                </p>
                <CheckoutCartItemFooter>
                  <CheckoutCartItemQuantity>
                    <CheckoutCartItemButton onClick={() => subtractQuantityCart(product.id)}>
                      <Minus />
                    </CheckoutCartItemButton>
                    <span>{product.quantity}</span>
                    <CheckoutCartItemButton onClick={() => addQuantityCart(product.id)}>
                      <Plus />
                    </CheckoutCartItemButton>
                  </CheckoutCartItemQuantity>
                  <CheckoutCartItemRemove onClick={() => removeFromCart(product.id)}>
                    <Trash />
                    Remover
                  </CheckoutCartItemRemove>
                </CheckoutCartItemFooter>
              </CheckoutCartItemDetails>
            </CheckoutCartItem>
          ))}
          <CheckoutTotal>
            <p>
              Total de itens <span>{checkout.quantity.toFixed(0)}</span>
            </p>
            <p>
              Entrega <span>R$ {checkout.deliveryTax.toFixed(2)}</span>
            </p>
            <p>
              Total <span>R$ {checkout.total.toFixed(2)}</span>
            </p>
            <button type="submit" form="form">
              Confirmar Pedido
            </button>
          </CheckoutTotal>
        </CheckoutCartContainer>
      </CheckoutContainerRight>
    </CheckoutContainer>
  );
}
