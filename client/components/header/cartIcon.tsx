import styled from 'styled-components';
import { useContext } from 'react';
import { IconButton } from '@radix-ui/themes';
import CartContext from '@lib/cartContext';

const Button = styled(IconButton)`
  position: relative;
  height: 26px;
  background-color: var(--siphon);
`;

const StyledBadge = styled.div`
  display: none;
  ${(props) => props.$totalItems > 0 && `display: block;`}
  position: absolute;
  right: -0.8em;
  top: -0.8em;
  min-width: 1.6em;
  height: 1.6em;
  border-radius: 0.8em;
  background-color: red;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  color: var(--ice);
`;

export default function CartIcon() {
  const { cartItems, setCartItems, setLastUpdated } = useContext(CartContext) as {
    cartItems: Map<string, number>;
    setCartItems: (cartItems: CartItemsMap) => void;
    setLastUpdated: (time: number) => void;
  };
  const totalItems = Array.from(cartItems.values()).reduce((acc, item) => acc + item, 0);
  const handleOnClick = () => {
    setCartItems(new Map());
    setLastUpdated(Date.now());
  };

  return (
    <Button onClick={handleOnClick}>
      <img src="/basket.svg" alt="Cart icon" />
      <StyledBadge $totalItems={totalItems}>{totalItems}</StyledBadge>
    </Button>
  );
}
