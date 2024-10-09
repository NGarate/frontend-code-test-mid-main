import { AspectRatio, Container, DataList, Grid, Box, Heading, Text } from '@radix-ui/themes';
import styled from 'styled-components';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import priceFormatter from '@lib/priceFormatter';

const DEFAULT_CULTURE = 'en-GB';

const ProductImage = styled(AspectRatio)`
  background: var(--siphon);
  order: 0;
  padding: var(--space-3);
`;
const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
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
const ProductDescription = styled(Box)`
  background-color: var(--hemocyanin);
  padding: var(--space-3);
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
  }
`;
const ProductSpecs = styled(Box)`
  padding: var(--space-4);
  order: 3;

  @media (min-width: 1024px) {
    order: 2;
  }
`;
const DataListRoot = styled(DataList.Root)`
  padding-top: var(--space-4);
`;
const StyledLabel = styled(DataList.Label)`
  color: var(--ice);
`;
type ProductProps = {
  product: {
    img_url: string;
  };
};

export default function Product({ product }: ProductProps) {
  const { value: price, currency, decimal_places: decimalPlaces } = product.price;
  const localizedPrice = priceFormatter({ currency, decimalPlaces, culture: DEFAULT_CULTURE, price });
  return (
    <Container size="1" maxWidth={{ sm: '100%', md: '800px' }}>
      <Grid columns={{ sm: '1', md: '3' }}>
        <ProductImage>
          <StyledImage src="/philips-plumen.jpg" alt="Phillips Plumen" />
        </ProductImage>
        <ProductMain gridColumn={{ sm: '1', md: '2' }}>
          <Heading as="h1" size="8">
            {product.name}
          </Heading>
          <ProductSubTitle>{`${product.power} // Packet of ${product.quantity}`}</ProductSubTitle>
          <PriceCta>{localizedPrice}</PriceCta>
        </ProductMain>
        <ProductDescription>
          <Heading as="h2" size="6">
            Description
          </Heading>
          <Box pt="4">{product.description}</Box>
        </ProductDescription>
        <ProductSpecs>
          <Heading as="h2" size="6">
            Specifications
          </Heading>
          <DataListRoot orientation="horizontal">
            <DataList.Item>
              <StyledLabel minWidth="88px">Brand</StyledLabel>
              <DataList.Value>{product.brand}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <StyledLabel minWidth="88px">Item weight (g)</StyledLabel>
              <DataList.Value>{product.weight}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <StyledLabel minWidth="88px">Dimensions (cm)</StyledLabel>
              <DataList.Value>{`${product.height} x ${product.width} x ${product.length}`}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <StyledLabel minWidth="88px">Item Model number</StyledLabel>
              <DataList.Value>{product.model_code}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <StyledLabel minWidth="88px">Colour</StyledLabel>
              <DataList.Value>{product.colour}</DataList.Value>
            </DataList.Item>
          </DataListRoot>
        </ProductSpecs>
      </Grid>
    </Container>
  );
}

export async function getStaticProps(): ProductProps {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/',
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query GetProduct {
        Product(id: 1) {
          id
          name
          price
          colour
          description
          model_code
          power
          height
          length
          colour
          quantity
          weight
          width
          brand
        }
      }
    `,
  });

  return {
    props: { product: data.Product },
  };
}
