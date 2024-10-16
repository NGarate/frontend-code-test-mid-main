import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--hemocyanin);
  color: var(--purpleHaze);
  padding: var(--space-3);
  font-size: var(--font-size-2);
`;

const Footer = () => (
  <StyledFooter>
    Octopus Energy Ltd is a company registered in England and Wales. Registered number: 09263424. Registered office: 33
    Holborn, London, ECIN 2HT. Trading office: 20-24 Broadwick Street, London, WIF 8HT
  </StyledFooter>
);

export default Footer;
