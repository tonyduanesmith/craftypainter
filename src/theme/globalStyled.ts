import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@media (max-width: 768px) {
  html {
    font-size: 12px;
  }
}

html {
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colours.neutrals[5]};
  user-select: none;
}

body {
  display: flex;
  margin: 0;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colours.neutrals[5]};
  box-sizing: border-box;
  user-select: none;
}

#root {
  height: 100%;
  width: 100%;
}
`;
