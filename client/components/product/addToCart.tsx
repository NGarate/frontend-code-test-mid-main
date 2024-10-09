import styled from 'styled-components';
import { Box, Button, Text } from '@radix-ui/themes';
import { useContext, useState } from 'react';
import CartContext, { CartItemsMap } from '@lib/cartContext';


const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: var(--space-4);
`;
const CounterContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-2);
`;
const MinusIcon = styled(Button)`
  &:after {
    content: '-';
  }
  ${(props) =>
    props.disabled
      ? 'background-color: var(--plum); color: var(--purpleHaze);'
      : 'background-color: var(--sohoLights); color: var(--hemocyanin);'}
  height: var(--space-6);
  width: var(--space-6);
  border-radius: 33%;
`;
const PlusIcon = styled(Button)`
  &:after {
    content: '+';
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-3);
  }
  height: var(--space-6);
  width: var(--space-6);
  background-color: var(--sohoLights);
  color: var(--hemocyanin);
  border-radius: 33%;
`;
const PriceContainer = styled(Text)`
  color: var(--ice);
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
`;
const QuantityContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QuantityTitle = styled(Text)`
  color: var(--ice);
  font-size: var(--font-size-2);
`;
const QuantityItem = styled(Text)`
  color: var(--ice);
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
`;
const StyledButton = styled(Button)`
  width: 100%;
  justify-self: stretch;
  background-color: var(--sohoLights);
  color: var(--hemocyanin);
  text-align: center;
  padding: var(--space-5);
  align-self: stretch;
  margin-top: var(--space-4);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-5);
`;

interface AddToCartProps {
  id: number;
  price: number;
}

export default function AddToCart({ id, price }: AddToCartProps) {
  const { cartItems, setCartItems } = useContext(CartContext) as {
    cartItems: CartItemsMap;
    setCartItems: (cartItems: CartItemsMap) => void;
  };
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    const cartItemQuantity = cartItems.get(id) || 0;
    setCartItems(cartItems.set(id, cartItemQuantity + quantity));
  };

  return (
    <Container>
      <PriceContainer>{price}</PriceContainer>
      <CounterContainer>
        <MinusIcon variant="solid" onMouseDown={() => setQuantity(quantity - 1)} disabled={quantity === 1} />
        <QuantityContainer>
          <QuantityTitle>Qty</QuantityTitle>
          <QuantityItem>{quantity}</QuantityItem>
        </QuantityContainer>
        <PlusIcon variant="solid" onMouseDown={() => setQuantity(quantity + 1)} />
      </CounterContainer>
      <StyledButton variant="solid" onClick={handleAddToCart}>
        Add to cart
      </StyledButton>
    </Container>
  );
}
