import { Container, DataList, Grid, Box, Heading } from '@radix-ui/themes';
import styled from 'styled-components';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import priceFormatter from '@lib/priceFormatter';
import ProductImage from '@components/product/image';
import ProductMain from '@components/product/main';

const DEFAULT_CULTURE = 'en-GB';

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
        <ProductImage />
        <ProductMain product={product} price={localizedPrice} />
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

export async function getStaticProps({ params }): ProductProps {
  const id = params.id;
  if (isNaN(id)) {
    throw new Error('Parameter is not a number!');
  }

  const client = new ApolloClient({
    uri: 'http://localhost:3000/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetProduct {
        Product(id: ${id}) {
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false,
  };
}
