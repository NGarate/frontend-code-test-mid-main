import styled from 'styled-components';
import { Box, Heading } from '@radix-ui/themes';

const Container = styled(Box)`
  padding: var(--space-3);
  grid-area: description;
`;
const Background = styled.div`
  padding: var(--space-3);
  background-color: var(--hemocyanin);
`;

export default function Description({ description }: { description: string }) {
  return (
    <Container>
      <Background>
        <Heading as="h2" size="6">
          Description
        </Heading>
        <Box pt="4">{description}</Box>
      </Background>
    </Container>
  );
}
