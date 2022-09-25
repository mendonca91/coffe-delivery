import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartItem } from '../../../contexts/CoffeCartContext';
import { useCart } from '../../../hooks/useCart';

import {
  CardContainer,
  CardFooter,
  Cart,
  CoffeAmout,
  CoffeType,
  Info,
} from './CoffeCard.styles';

export function CoffeCard(coffee: CartItem) {
  const {
    photo,
    name,
    description,
    price,
    types,
  } = coffee;
  const [quantity, setQuantity] = useState(1);

  const {addCoffeeToCart} = useCart(); 

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }


  return (
    <CardContainer>
      <img src={photo} />
      <CoffeType>
        {types.map((type) => (
          <span>{type}</span>
        ))}
      </CoffeType>
      <Info>
        <strong>{name}</strong>
        <p>{description}</p>
      </Info>

      <CardFooter>
        <p>
          R$ <strong>{price}</strong>
        </p>
        <CoffeAmout>
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </CoffeAmout>
        <Cart onClick={handleAddToCart}>
          <FaShoppingCart />
        </Cart>
      </CardFooter>
    </CardContainer>
  );
}
