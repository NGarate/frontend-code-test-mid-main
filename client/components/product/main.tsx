import styled from 'styled-components';
import { Box, Heading, Text } from '@radix-ui/themes';

const ProductMain = styled(Box)`
  order: 1;
  padding: var(--space-3);
  @media (min-width: 1024px) {
    order: 4;
  }
`;

const ProductSubTitle = styled(Text)`
  color: var(--purpleHaze);
  font-weight: var(--font-weight-bold);
  order: 1;
  padding: var(--space-3) 0;
  @media (min-width: 1024px) {
    order: 4;
  }
`;
const PriceCta = styled.div`
  padding: var(--space-3) 0;
`;

interface ProductProps {
  product: {
    name: string;
    power: string;
    quantity: number;
  };
  price: string;
}

export default function MainProduct({ product, price }: ProductProps) {
  return (
    <ProductMain gridColumn={{ sm: '1', md: '2' }}>
      <Heading as="h1" size="8">
        {product.name}
      </Heading>
      <ProductSubTitle>{`${product.power} // Packet of ${product.quantity}`}</ProductSubTitle>
      <PriceCta>{price}</PriceCta>
    </ProductMain>
  );
}
