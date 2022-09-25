import { FaBox, FaClock, FaCoffee, FaShoppingCart } from 'react-icons/fa';

import {
  Container,
  IntroText,
  IntroImage,
  IntroAdvantages,
} from './Intro.styles';

import cafe from '../../../public/assets/cafe.png';
import { Coffes } from '../Coffes';
import { Header } from '../Header';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <IntroText>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </div>
          <div>
            <IntroAdvantages>
              <span>
                <FaShoppingCart style={{ backgroundColor: '#C47F17' }} />
                Compra simples e segura
              </span>

              <span>
                <FaBox style={{ backgroundColor: '#574F4D' }} /> Embalagem
                mantém o café intacto
              </span>

              <span>
                <FaClock style={{ backgroundColor: '#DBAC2C' }} />
                Entrega rápida e rastreada
              </span>

              <span>
                <FaCoffee style={{ backgroundColor: '#8047F8' }} /> O café chega
                fresquinho até você
              </span>
            </IntroAdvantages>
          </div>
        </IntroText>
        <IntroImage>
          <img src={cafe} alt='copo de cafe' />
        </IntroImage>
      </Container>
      <Coffes />
    </>
  );
}
