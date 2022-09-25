import { useCart } from "../../hooks/useCart";
import { CoffesList } from "../Coffes/coffesList";
import { CoffeeCartCard } from "./CoffeCartItem/CoffeCartItem";
import { ConfirmationSection } from "./ConfirmationOrder/ConfirmationOrder";



import { DetailsContainer, SelectedCoffeesContainer } from "./SelectedCoffes.styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <span>
        Cafés selecionados
      </span>

      <DetailsContainer>

        
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
         ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}