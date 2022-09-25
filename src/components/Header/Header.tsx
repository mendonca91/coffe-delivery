import {
  HeaderContainer,
  HeaderActions,
  HeaderCart,
  HeaderLocation,
} from './Header.styles';
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import Logo from '/assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const history = useNavigate();

  const {cartQuantity} = useCart();

  function handleGoToCart() {
    history('/checkout');
  }
  return (
    <HeaderContainer>
      <a href='/'>
        <img src={Logo} alt='Copo de café' />
      </a>
      <HeaderActions>
        <HeaderLocation>
          <FaMapMarkerAlt />
          <span>Aracaju-se</span>
        </HeaderLocation>
        <button type='button' onClick={handleGoToCart}>
          <HeaderCart>
            <FaShoppingCart size={18} />
            <span>{cartQuantity}</span>
          </HeaderCart>
        </button>
      </HeaderActions>
    </HeaderContainer>
  );
}
