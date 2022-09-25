import { ConfirmationSectionContainer } from "../SelectedCoffes.styles";


import { useCart } from "../../../hooks/useCart";
import { formatMoney } from "../../../utils/formatMoney";
import { CartItem } from "../../../contexts/CoffeCartContext";
import { FormEvent } from "react";

const DELIVERY_PRICE = 3.5;


export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity, cartItems } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

    function handleSubmit(event: FormEvent<HTMLFormElement>, order: CartItem[], total: number){
        console.log(order, total)
        event.preventDefault()
    }

  return (
    <ConfirmationSectionContainer onSubmit={(e)=>handleSubmit(e, cartItems, cartTotal)}>
      <div>
        <span>Total de itens</span>
        <span>R$ {formattedItemsTotal}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {formattedDeliveryPrice}</span>
      </div>
      <div>
        <span color="subtitle">
          Total
        </span>
        <span color="subtitle">
          R$ {formattedCartTotal}
        </span>
      </div>

      <button
        disabled={cartQuantity <= 0}
        type="submit"
      >Confirmar Pedido</button>
    </ConfirmationSectionContainer>
  );
}