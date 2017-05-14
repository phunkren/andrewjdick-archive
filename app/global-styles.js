import { injectGlobal } from 'styled-components';


/* eslint no-unused-expressions: 0 */
injectGlobal`

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #ffffff;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #002b36;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-size: 14px;
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    margin: 0;
    padding: 0;

    @media only screen and (min-width: 481px!default;) {
      font-size: 16px;
    }
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  a {
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;

    @media only screen and (min-width: 481px!default;) {
      font-size: 16px;
    }
  }
`;
