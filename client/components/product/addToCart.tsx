import styled from 'styled-components';
import { Box, Button, Text } from '@radix-ui/themes';
import { useContext, useState } from 'react';
import CartContext, { CartItemsMap } from '@lib/cartContext';


const Container = styled(Box)`
  grid-area: addToCart;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: var(--space-3);
`;
const CounterContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-2);
`;
const MinusIcon = styled(Button)`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-3);
  background-color: var(--sohoLights);
  color: var(--hemocyanin);
  cursor: var(--cursor-button);
  ${(props) =>
    props.disabled && 'background-color: var(--plum); color: var(--purpleHaze); cursor: var(--cursor-disabled);'}
  height: var(--space-6);
  width: var(--space-6);
  border-radius: 33%;
`;
const PlusIcon = styled(Button)`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-3);
  height: var(--space-6);
  width: var(--space-6);
  background-color: var(--sohoLights);
  color: var(--hemocyanin);
  border-radius: 33%;
  cursor: var(--cursor-button);
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
const AddButton = styled(Button)`
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
  cursor: var(--cursor-button);
`;

interface AddToCartProps {
  id: number;
  price: number;
}

export default function AddToCart({ id, price }: AddToCartProps) {
  const { cartItems, setCartItems, setLastUpdated } = useContext(CartContext) as {
    cartItems: CartItemsMap;
    setCartItems: (cartItems: CartItemsMap) => void;
    lastUpdated: number;
    setLastUpdated: (time: number) => void;
  };
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItemQuantity = cartItems.get(id) || 0;
    setCartItems(cartItems.set(id, cartItemQuantity + quantity));
    setLastUpdated(Date.now());
  };

  return (
    <Container>
      <PriceContainer>{price}</PriceContainer>
      <CounterContainer>
        <MinusIcon variant="solid" onMouseDown={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
          -
        </MinusIcon>
        <QuantityContainer>
          <QuantityTitle>Qty</QuantityTitle>
          <QuantityItem title="Current quantity">{quantity}</QuantityItem>
        </QuantityContainer>
        <PlusIcon variant="solid" onMouseDown={() => setQuantity(quantity + 1)}>
          +
        </PlusIcon>
      </CounterContainer>
      <AddButton variant="solid" onClick={handleAddToCart}>
        Add to cart
      </AddButton>
    </Container>
  );
}
