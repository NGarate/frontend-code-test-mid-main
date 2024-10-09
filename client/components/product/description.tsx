import styled from 'styled-components';
import { Box, Heading } from '@radix-ui/themes';

const Container = styled(Box)`
  background-color: var(--hemocyanin);
  padding: var(--space-3);
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
  }
`;

export default function Description({ description }: { description: string }) {
  return (
    <Container>
      <Heading as="h2" size="6">
        Description
      </Heading>
      <Box pt="4">{description}</Box>
    </Container>
  );
}
