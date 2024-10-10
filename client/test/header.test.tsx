import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/header';
import CartContext from '../lib/cartContext';

const FakeProvider = ({
  children,
  initialCartItems,
}: {
  children: React.ReactNode;
  initialCartItems: CartItemsMap;
}) => {
  const [cartItems, setCartItems] = useState<CartItemsMap>(initialCartItems || new Map());
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());

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

test('renders the Header correctly with no cart items', async () => {
  const tree = renderer
    .create(
      <FakeProvider>
        <Header />
      </FakeProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('renders the Header correctly with multiple cart items', async () => {
  const customCartItems = new Map();
  customCartItems.set(1, 3);
  customCartItems.set(2, 1);
  customCartItems.set(3, 4);

  const tree = renderer
    .create(
      <FakeProvider initialCartItems={customCartItems}>
        <Header />
      </FakeProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
