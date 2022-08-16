import {
  DeliveryConfirmation,
  DeliveryConfirmationDetail,
  DeliveryConfirmationDetailItem,
  DeliveryConfirmationDetailItemIcon,
  DeliveryContainer,
} from "./Delivery.styles";

import { MapPin, CurrencyDollar, Timer } from "phosphor-react";
import delivery from "../../../../assets/delivery.svg";
import { useContext } from "react";
import { MarketContext } from "../../../../contexts/MarketContext";

export function Delivery() {
  const { order } = useContext(MarketContext);
  return (
    <DeliveryContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que o logo o café chegará até você</h2>

      <DeliveryConfirmation>
        <DeliveryConfirmationDetail>
          <div>
            <DeliveryConfirmationDetailItem>
              <DeliveryConfirmationDetailItemIcon iconColor="white" backgroundIconColor="purple">
                <MapPin weight="fill" size={20} />
              </DeliveryConfirmationDetailItemIcon>
              <div>
                <p>
                  Entrega em{" "}
                  <strong>
                    {order.deliveryAddress.street},{order.deliveryAddress.number}
                  </strong>
                </p>
                <p>
                  {order.deliveryAddress.district} - {order.deliveryAddress.city}, {order.deliveryAddress.state}
                </p>
              </div>
            </DeliveryConfirmationDetailItem>
            <DeliveryConfirmationDetailItem>
              <DeliveryConfirmationDetailItemIcon iconColor="white" backgroundIconColor="yellow">
                <Timer weight="fill" size={20} />
              </DeliveryConfirmationDetailItemIcon>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </DeliveryConfirmationDetailItem>
            <DeliveryConfirmationDetailItem>
              <DeliveryConfirmationDetailItemIcon iconColor="white" backgroundIconColor="purple">
                <CurrencyDollar weight="fill" size={20} />
              </DeliveryConfirmationDetailItemIcon>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{order.paymentMethod}</strong>
                </p>
              </div>
            </DeliveryConfirmationDetailItem>
          </div>
        </DeliveryConfirmationDetail>
        <img src={delivery} alt="Confirmação de entrega" />
      </DeliveryConfirmation>
    </DeliveryContainer>
  );
}
