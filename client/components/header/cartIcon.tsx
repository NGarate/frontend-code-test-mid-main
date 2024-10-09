import styled from 'styled-components';

const StyledImage = styled.img`
  height: 26px;
`;

export default function CartIcon() {
  return <StyledImage src="/basket.svg" alt="Cart icon" />;
}
