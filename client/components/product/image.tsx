import styled from 'styled-components';
import { AspectRatio } from '@radix-ui/themes';

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const Container = styled(AspectRatio)`
  background: var(--siphon);
  order: 0;
  padding: var(--space-3);
`;

export default function ProductImage() {
  return (
    <Container>
      <StyledImage src="/philips-plumen.jpg" alt="Phillips Plumen" />
    </Container>
  );
}
