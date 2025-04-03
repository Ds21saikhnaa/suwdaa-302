// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const LoadingWrap = styled.div`
  .loading-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #ff7eb3;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .loading-text span {
    animation: bounce 1.2s infinite;
    display: inline-block;
    margin: 0 2px;
  }

  /* Animating each letter slightly later for a cute effect */
  .loading-text span:nth-child(2) {
    animation-delay: 0.1s;
  }
  .loading-text span:nth-child(3) {
    animation-delay: 0.2s;
  }
  .loading-text span:nth-child(4) {
    animation-delay: 0.3s;
  }
  .loading-text span:nth-child(5) {
    animation-delay: 0.4s;
  }
  .loading-text span:nth-child(6) {
    animation-delay: 0.5s;
  }
  .loading-text span:nth-child(7) {
    animation-delay: 0.6s;
  }
  .loading-text span:nth-child(8) {
    animation-delay: 0.7s;
  }
  .loading-text span:nth-child(9) {
    animation-delay: 0.8s;
  }
  .loading-text span:nth-child(10) {
    animation-delay: 0.9s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    40% {
      transform: scale(1.3);
      opacity: 0.8;
    }
  }
`;
