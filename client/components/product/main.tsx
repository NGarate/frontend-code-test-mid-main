import styled from 'styled-components';
import { Box, Heading, Text } from '@radix-ui/themes';
import AddToCart from './addToCart';

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

interface MainProductProps {
  name: string;
  power: string;
  quantity: number;
  price: string;
  id: number;
}

export default function MainProduct({ id, name, power, quantity, price }: MainProductProps) {
  return (
    <ProductMain gridColumn={{ sm: '1', md: '2' }}>
      <Heading as="h1" size="8">
        {name}
      </Heading>
      <ProductSubTitle>{`${power} // Packet of ${quantity}`}</ProductSubTitle>
      <AddToCart price={price} id={id} />
    </ProductMain>
  );
}
