import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '../pages/product/[id]';
import CartContext from '../lib/cartContext';

const mockProduct = {
  id: 1,
  name: 'Energy saving light bulb',
  price: {
    value: 1299,
    currency: 'GBP',
    decimal_places: 2,
  },
  colour: 'Cool daylight',
  description:
    'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
  model_code: 'E27 ES',
  power: '25W',
  height: 12.6,
  length: 6.2,
  quantity: 4,
  weight: 77,
  width: 6.2,
  brand: 'Philips',
};

let cartItems, setCartItems, lastUpdated, setLastUpdated;

const FakeProvider = ({ children }: { children: React.ReactNode }) => {
  [cartItems, setCartItems] = useState<CartItemsMap>(new Map());
  [lastUpdated, setLastUpdated] = useState<number>(Date.now());

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        lastUpdated,
        setLastUpdated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const customRender = (ui) => {
  return render(<FakeProvider>{ui}</FakeProvider>);
};

test('should be able to increase and decrease product quantity', async () => {
  const { getByText, getByTitle } = customRender(<Product product={mockProduct} />);

  const increaseQuantity = getByText('+');

  const currentQuantity = getByTitle('Current quantity');
  expect(currentQuantity).toHaveTextContent('1');

  fireEvent.mouseDown(increaseQuantity);
  expect(currentQuantity).toHaveTextContent('2');

  const decreaseQuantity = getByText('-');

  fireEvent.mouseDown(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent('1');
});

test('should be able to add items to the basket', async () => {
  const { getByText, getByTitle, findByTitle } = customRender(<Product product={mockProduct} />);

  const increaseQuantity = getByText('+');

  const currentQuantity = getByTitle('Current quantity');

  fireEvent.mouseDown(increaseQuantity);
  fireEvent.mouseDown(increaseQuantity);
  fireEvent.mouseDown(increaseQuantity);

  expect(currentQuantity).toHaveTextContent('4');

  const addToBasketElement = getByText('Add to cart');
  fireEvent.click(addToBasketElement);

  const basketItems = await findByTitle('Basket items');
  expect(basketItems).toHaveTextContent('4');
});
