import { CardWrapper } from './CardWrapper/CardWrapper';
import {
  Container,
  FormContainer,
  OrderContainer,
  PaymentMethodContent,
  TitleContainer,
  TitleContent,
} from './Checkout.styles';
import { Header } from '../Header';
import markerIcon from '/assets/marker-icon.png';
import dolarIcon from '/assets/dolar-icon.png';
import { PaymentMethodInput } from '../PaymentMethodOptions/PaymentMethod/PaymentMethod';
import { paymentMethods } from '../PaymentMethodOptions/PaymentMethodOptions';
import { SelectedCoffees } from '../SelectedCoffes/SelectedCoffes';

export function Checkout() {
  return (
    <>
      <Header />
      <Container>
        <OrderContainer>
          <CardWrapper title='Complete seu pedido'>
            <TitleContainer>
              <img src={markerIcon} />
              <TitleContent>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </TitleContent>
            </TitleContainer>

            <FormContainer>
              <input type='text' placeholder='CEP' />
              <input type='text' placeholder='Rua' />

              <div>
                <input type='text' placeholder='Número' />
                <input type='text' placeholder='Complemento' />
              </div>
              <div>
                <input type='text' placeholder='Bairro' />
                <input type='text' placeholder='Cidade' />
                <input type='text' placeholder='UF' />
              </div>
            </FormContainer>
          </CardWrapper>
          <CardWrapper>
            <TitleContainer>
              <img src={dolarIcon} />
              <TitleContent>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </TitleContent>
            </TitleContainer>
            
            <PaymentMethodContent>
            <PaymentMethodInput id={'1'} icon={paymentMethods.credit.icon} label={paymentMethods.credit.label} value={paymentMethods.credit.label}/>
            <PaymentMethodInput id={'2'} icon={paymentMethods.debit.icon} label={paymentMethods.debit.label} value={paymentMethods.debit.label}/>
            <PaymentMethodInput id={'3'} icon={paymentMethods.money.icon} label={paymentMethods.money.label} value={paymentMethods.money.label}/>
            </PaymentMethodContent>
          </CardWrapper>
        </OrderContainer>
        <CardWrapper title='Cafés selecionados'>
        <SelectedCoffees/>
        </CardWrapper>
      </Container>
    </>
  );
}
