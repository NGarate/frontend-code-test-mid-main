import { Container, Grid } from '@radix-ui/themes';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import priceFormatter from '@lib/priceFormatter';
import ProductImage from '@components/product/image';
import ProductMain from '@components/product/main';
import ProductSpecs from '@components/product/specs';
import ProductDescription from '@components/product/description';

const DEFAULT_CULTURE = 'en-GB';

type ProductProps = {
  product: {
    img_url: string;
    price: {
      value: number;
      currency: string;
      decimal_places: number;
    };
    description: string;
    brand: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    model_code: string;
    colour: string;
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
        <ProductDescription description={product.description} />
        <ProductSpecs
          brand={product.brand}
          weight={product.weight}
          height={product.height}
          width={product.width}
          length={product.length}
          model_code={product.model_code}
          colour={product.colour}
        />
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
