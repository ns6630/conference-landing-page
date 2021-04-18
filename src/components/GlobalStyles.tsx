import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;

    @keyframes slideToRight {
      from {
        margin-left: -100%;
        opacity: 0;
      }

      to {
        margin-left: 0%;
        opacity: 1;
      }
    }

    @keyframes slideToLeft {
      from {
        margin-left: 100%;
        opacity: 0;
      }

      to {
        margin-left: 0%;
        opacity: 1;
      }
    }

    @keyframes compositionIn {
      from {
        top: -100%;
        opacity: 0;
      }

      to {
        top: 0;
        opacity: 1;
      }
    }
  }

  .composition-in {
    animation-duration: .75s;
    animation-name: compositionIn;
    animation-direction: alternate;
  }

  .slide-to-right {
    animation-duration: .75s;
    animation-name: slideToRight;
    animation-direction: alternate;
  }

  .slide-to-left {
    animation-duration: .75s;
    animation-name: slideToleft;
    animation-direction: alternate;
  }
`;

export default GlobalStyles;