import '@styles/globals.css';
import '@radix-ui/themes/styles.css';
import '@styles/radixCustomTheme.css';
import Header from '@components/header';
import Footer from '@components/footer';
import CartContext, { CartItemsMap } from '@lib/cartContext';
import { useState } from 'react';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: unknown;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [cartItems, setCartItems] = useState<CartItemsMap>(new Map());

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartContext.Provider>
  );
}

export default MyApp;
