import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  white: '#fff',
  gray: '#c1c1c1',
  offwhite: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;

  body {
    background-color: ${colors.white};
    color: ${colors.pink};

  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
