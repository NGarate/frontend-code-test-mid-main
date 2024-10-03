import { Container, Grid, Box } from '@radix-ui/themes';
import styled from 'styled-components';

const ProductImage = styled(Box)`
  background-color: blue;
  color: var(--ice);
  order: 0;
`;
const ProductMain = styled(Box)`
  background-color: green;
  color: var(--ice);
  order: 1;
  @media (min-width: 1024px) {
    order: 2;
  }
`;
const ProductDetails = styled(Box)`
  background-color: red;
  color: var(--ice);
  order: 2;
  @media (min-width: 1024px) {
    order: 1;
  }
`;
const ProductDescription = styled(Box)`
  background-color: red;
  color: var(--ice);
`;
const ProductSpecs = styled(Box)`
  background-color: yellow;
  color: black;
`;

export default function Product() {
  return (
    <Container size="1" align="center" maxWidth={{ sm: '100%', md: '800px' }}>
      <Grid columns={{ sm: '1', md: '3' }} gap="0" justify="center" align="center">
        <ProductImage>Product image</ProductImage>
        <ProductMain>Product main</ProductMain>
        <ProductDetails>
          <ProductDescription>Product description</ProductDescription>
          <ProductSpecs>Product specs</ProductSpecs>
        </ProductDetails>
      </Grid>
    </Container>
  );
}
