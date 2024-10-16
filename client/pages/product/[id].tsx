import { Container, Grid } from '@radix-ui/themes';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import priceFormatter from '@lib/priceFormatter';
import ProductImage from '@components/product/image';
import ProductMain from '@components/product/main';
import ProductSpecs from '@components/product/specs';
import ProductDescription from '@components/product/description';
import AddToCart from '@components/product/addToCart';

const DEFAULT_CULTURE = 'en-GB';

type ProductProps = {
  product: {
    id: number;
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
  const { value, currency, decimal_places: decimalPlaces } = product.price;
  const { brand, colour, height, id, length, model_code, name, power, quantity, weight, width } = product;
  const localizedPrice = priceFormatter({ currency, decimalPlaces, culture: DEFAULT_CULTURE, price: value });

  return (
    <Container size="2" maxWidth={{ xs: '100%', sm: '800px' }}>
      <Grid
        justify="center"
        align="center"
        columns={{ initial: '1', sm: '3' }}
        rows={{ initial: 'max-content', sm: 'max-content' }}
        areas={{
          initial: "'image' 'name' 'addToCart' 'description' 'specifications'",
          sm: "'image description specifications' 'name . addToCart'",
        }}
      >
        <ProductImage />
        <ProductMain id={id} name={name} power={power} quantity={quantity} price={localizedPrice} />
        <AddToCart price={localizedPrice} id={id} />
        <ProductDescription description={product.description} />
        <ProductSpecs
          brand={brand}
          weight={weight}
          height={height}
          width={width}
          length={length}
          model_code={model_code}
          colour={colour}
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
