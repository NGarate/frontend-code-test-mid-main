import { Html, Head, Main, NextScript } from 'next/document';
import StyledComponentsRegistry from '@lib/registry';
import { Theme } from '@radix-ui/themes';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://static.octopuscdn.com/fonts/Gotham/fonts.min.css" />
        <link
          rel="icon"
          type="image/png"
          href="https://static.octopuscdn.com/favicons/favicon-32x32.png"
          sizes="32x32"
        ></link>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <Theme appearance="dark">
            <Main />
            <NextScript />
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </Html>
  );
}
