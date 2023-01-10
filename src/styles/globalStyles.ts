import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Heavy"), 
      url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoH.woff) format("woff");
    font-weight: 900;
    unicode-range: U+AC00-D7A3, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Medium"),
      url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "SFUIDisplay";
    src: url(/fonts/SFUIDisplay/SFUIDisplay-Regular.woff2) format("woff2");
    font-weight: 400;
  }
`;

/* @media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
} */

export default GlobalStyles;
