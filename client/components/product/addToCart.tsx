import styled from 'styled-components';
import { Box, Button, Text } from '@radix-ui/themes';
import { useContext, useState } from 'react';
import CartContext, { CartItemsMap } from '@lib/cartContext';

const StyledButton = styled(Button)`
  width: 50px;
  background-color: var(--siphon);
  text-align: center;
  margin-right: var(--space-2);
`;
const PriceContainer = styled(Text)`
  color: var(--ice);
  margin-right: var(--space-2);
`;
const Container = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: var(--space-4);
`;
const QuantityContainer = styled(Box)`
  display: flex;
  align-items: center;
`;
const QuantityTitle = styled(Text)`
  color: var(--purpleHaze);
  margin-right: var(--space-2);
`;
const QuantityItem = styled(Text)`
  color: var(--ice);
`;

interface AddToCartProps {
  id: number;
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
      <StyledButton variant="solid" onMouseDown={() => setQuantity(quantity + 1)}>
        +
      </StyledButton>
      <QuantityContainer>
        <QuantityTitle />
        <QuantityItem>{quantity}</QuantityItem>
      </QuantityContainer>
      <StyledButton variant="solid" onMouseDown={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
        -
      </StyledButton>
      <StyledButton variant="solid" onClick={handleAddToCart}>
        Add to Basket
      </StyledButton>
    </Container>
  );
}
