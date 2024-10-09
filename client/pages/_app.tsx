import '@styles/globals.css';
import '@radix-ui/themes/styles.css';
import '@styles/radixCustomTheme.css';
import Header from '@components/header';
import Footer from '@components/footer';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: unknown;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
