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
} from "./Checkout.styles";
import {
  MapPinLine,
  CurrencyDollar,
  Money,
  CreditCard,
  Bank,
} from "phosphor-react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContainerLeft>
        <h1>Complete o seu pedido</h1>

        <CheckoutFormContainer>
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
            <CheckoutFormInput placeholder="CEP" width={28} />
            <CheckoutFormInput placeholder="Rua" width={100} />
            <CheckoutFormInput placeholder="Número" width={28} />
            <CheckoutFormInput
              placeholder="Complemento"
              width={70}
              after="opcional"
            />
            <CheckoutFormInput placeholder="Bairro" width={28} />
            <CheckoutFormInput placeholder="Cidade" width={60} />
            <CheckoutFormInput placeholder="UF" width={8} />
          </CheckoutForm>
        </CheckoutFormContainer>

        <CheckoutPaymentMethodContainer>
          <CheckoutTitle iconColor="purple">
            <div>
              <CurrencyDollar />
              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
          </CheckoutTitle>
          <CheckoutPaymentOptions>
            <CheckoutPaymentOption>
              <CreditCard />
              <p>CARTÃO DE CRÉDITO</p>
            </CheckoutPaymentOption>
            <CheckoutPaymentOption>
              <Bank />
              <p>CARTÃO DE DÉBITO</p>
            </CheckoutPaymentOption>
            <CheckoutPaymentOption>
              <Money />
              <p>DINHEIRO</p>
            </CheckoutPaymentOption>
          </CheckoutPaymentOptions>
        </CheckoutPaymentMethodContainer>
      </CheckoutContainerLeft>
      <CheckoutContainerDivider />
      <CheckoutContainerRight>
        <h1>Cafés selecionados</h1>
        <CheckoutCartContainer>sdsa</CheckoutCartContainer>
      </CheckoutContainerRight>
    </CheckoutContainer>
  );
}
