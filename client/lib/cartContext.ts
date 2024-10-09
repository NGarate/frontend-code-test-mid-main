import { createContext } from 'react';

type Id = number;
type Quantity = number;
type CartItemsMap = Map<Id, Quantity>;

const CartContext = createContext<{ items: CartItemsMap }>(null);

export default CartContext;
