import styled from 'styled-components';
import { Box, Heading, Text } from '@radix-ui/themes';
import AddToCart from './addToCart';

const ProductMain = styled(Box)`
  padding: var(--space-3);
  grid-area: name;
`;

const ProductSubTitle = styled(Text)`
  color: var(--purpleHaze);
  font-weight: var(--font-weight-bold);
  padding: var(--space-3) 0;
`;

interface MainProductProps {
  name: string;
  power: string;
  quantity: number;
  price: string;
  id: number;
}

export default function MainProduct({ name, power, quantity }: MainProductProps) {
  return (
    <ProductMain>
      <Heading as="h1" size="8">
        {name}
      </Heading>
      <ProductSubTitle>{`${power} // Packet of ${quantity}`}</ProductSubTitle>
    </ProductMain>
  );
}
