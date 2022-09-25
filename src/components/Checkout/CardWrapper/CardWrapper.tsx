import { Container, Title, Wrapper } from './CardWrapper.styles';
import { CardWrapperProps } from './CardWrapper.types';

export function CardWrapper({ title, children, ...rest }: CardWrapperProps) {
  return (
    <Container {...rest}>
      {title && <Title>{title}</Title>}
      <Wrapper {...rest}>{children}</Wrapper>
    </Container>
  );
}
