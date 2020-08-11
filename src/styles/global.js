import { css } from '@emotion/core'

import { colors } from './variables'

export const globalStyle = css`
  * {
    font-family: 'Athiti', sans-serif;
    line-height: 1.35;
    color: ${colors.black2};
  }

  button {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  body {
    padding: 0;
    margin: 0;
  }
`