import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @keyframes slideTopIn {
    0%{
      transform:translateY(-300px);
    }

    100%{
      transform:translateY(0);
    }
  }

  @keyframes slideTopOut {
    0%{
      transform:translateY(0);
    }

    100%{
      transform:translateY(-300px);
    }
  }

  @keyframes slideBottomIn {
    0%{
      transform:translateY(300px);
    }

    100%{
      transform:translateY(0);
    }
  }

  @keyframes slideBottomOut {
    0%{
      transform:translateY(0);
    }

    100%{
      transform:translateY(300px);
    }
  }

  @keyframes SlideInX{
    0%{
      transform:translateX(-500px);
      opacity:0;
    }

    100%{
      transform:translateX(0);
      opacity:1;

    }
  }

  
  // For the dot
  @keyframes dotMove {
    0%,
    100% {
      transform: rotate(180deg) translate(-110px, -10px) rotate(-180deg);
    }
    50% {
      transform: rotate(0deg) translate(-111px, 10px) rotate(0deg);
    }
  }

  // For the letter "i"
  @keyframes letterStretch {
    0%,
    100% {
      transform: scale(1, 0.35);
      transform-origin: 100% 75%;
    }
    8%,
    28% {
      transform: scale(1, 2.125);
      transform-origin: 100% 67%;
    }
    37% {
      transform: scale(1, 0.875);
      transform-origin: 100% 75%;
    }
    46% {
      transform: scale(1, 1.03);
      transform-origin: 100% 75%;
    }
    50%,
    97% {
      transform: scale(1);
      transform-origin: 100% 75%;
    }
  }

  // For the letter "L"
  @keyframes lineStretch {
    0%,
    45%,
    70%,
    100% {
      transform: scaleY(0.125);
    }
    49% {
      transform: scaleY(0.75);
    }
    50% {
      transform: scaleY(0.875);
    }
    53% {
      transform: scaleY(0.5);
    }
    60% {
      transform: scaleY(0);
    }
    68% {
      transform: scaleY(0.18);
    }
  }

  @media (min-width: 48rem) {
    #container {
      transform: scale(0.725rem);
    }
  }

  @media (min-width: 62rem) {
    #container {
      transform: scale(0.85);
    }
  }


  body {
    margin: 0;
    padding: 0;
    color: var(--primary);

  }

  .ReactModal__Overlay {
    z-index:999;
  }
  :root{
    --content: 1000px;
  }

  [data-theme="default"]{
    --primary: #ff2a70;
  }

  [data-theme="fun"]{
    --primary: #00ff00;
  }

  [data-theme="cold"]{
    --primary: #0000ff;
  }
`;

export default GlobalStyle;
