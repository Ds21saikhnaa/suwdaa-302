// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const ContainerWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .text-block {
    height: 70%;
    width: 550px;
    position: relative;
    padding: 20px;
    border-radius: 10px; /* Optional: adjust to desired corner rounding */
    background: linear-gradient(45deg, #ff7eb3, #ff65a3, #7afcff, #feff9c, #fff740); /* Gradient colors */
    overflow: hidden; /* Ensure inner content doesn’t overflow */
    @media (max-width: 600px) {
      width: 90%;
      min-height: 400px;
      max-height: 80%;
    }
  }
  .text-block::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white; /* Inner background color */
    border-radius: 8px; /* Match the border radius, but slightly smaller */
    z-index: 1;
  }

  .text-block > * {
    position: relative;
    z-index: 2; /* Ensure content is on top of the inner background */
  }
  .item {
    padding: 20px;
    height: 100%;
    overflow-y: auto; 
    color: #ff69b4; /* Cute pink color */
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    line-height: 1.5;
  }
`;
