import { useContext } from "react";
import { CartContext } from "../contexts/CoffeCartContext";

export function useCart() {
  const context = useContext(CartContext);  
  return context;
}