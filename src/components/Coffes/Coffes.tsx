import { CoffeCard } from './CoffeCard/CoffeCard';
import { Container, Content } from './Coffes.styles';
import { CoffesList } from './coffesList';

export function Coffes() {
  return (
    <Container>
      <h2>Nossos cafés</h2>
      <Content>
        {CoffesList.map((coffe) => (
          <CoffeCard
            name={coffe.name}
            description={coffe.description}
            price={coffe.price}
            photo={coffe.photo}
            types={coffe.type} 
            id={coffe.id}          />
        ))}
      </Content>
    </Container>
  );
}
