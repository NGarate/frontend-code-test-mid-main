import styled from 'styled-components';
import CartIcon from './cartIcon';

const StyledHeader = styled.header`
  background-color: var(--siphon);
  color: var(--ice);
  padding: var(--space-3);
  position: sticky;
  top: 0;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledImage = styled.img`
  max-width: 400px;
  width: 50vw;
`;

const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <StyledImage src="/octopus-logo.svg" alt="Octopus Energy logo" />
      <CartIcon />
    </FlexContainer>
  </StyledHeader>
);

export default Header;
