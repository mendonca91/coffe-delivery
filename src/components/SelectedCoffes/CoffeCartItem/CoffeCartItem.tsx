import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./CoffeCartItem.styles";
import {FaTrash} from 'react-icons/fa'

import { useCart } from "../../../hooks/useCart";

import { QuantityInput } from "../../QuantityInputs/QuantityInputs";
import { formatMoney } from "../../../utils/formatMoney";


import { CoffeeCartCardProps } from "./CoffeCartItem.types";

export function CoffeeCartCard( {coffee} : CoffeeCartCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart();

  
    function handleIncrease() {
      changeCartItemQuantity(coffee.id, "increase");
    }
  
    function handleDecrease() {
      changeCartItemQuantity(coffee.id, "decrease");
    }
  
    function handleRemove() {
      removeCartItem(coffee.id);
    }
  
    const coffeeTotal = coffee.price * coffee.quantity;
  
    const formattedPrice = formatMoney(coffeeTotal);
  
    return (
      <CoffeeCartCardContainer>
        <div>
          <img src={coffee.photo} />
          <div>
            <span color="subtitle">{coffee.name}</span>
            <ActionsContainer>
              <QuantityInput
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={coffee.quantity}
                size="small"
              />
              <RemoveButton type="button" onClick={handleRemove}>
                <FaTrash size={16} />
                REMOVER
              </RemoveButton>
            </ActionsContainer>
          </div>
        </div>
  
        <p>R$ {formattedPrice}</p>
      </CoffeeCartCardContainer>
    );
  }