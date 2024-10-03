import '@radix-ui/themes/styles.css';
import '../styles/globals.css';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: unknown;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
