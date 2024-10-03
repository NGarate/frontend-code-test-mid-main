import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <main>
      <HomeContainer>
        <figure>
          <img src="https://static.octopuscdn.com/logos/logo.svg" alt="Octopus Energy Logo" />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing <code>client/pages/product.tsx</code>
        </p>
      </HomeContainer>
    </main>
  );
}
