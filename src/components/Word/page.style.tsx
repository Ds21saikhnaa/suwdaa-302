// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const ContainerWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    height: 100%;
    width: 100%;
  }
  .swiper-pagination-bullet {
    background-color: pink; /* Pink color for bullets */
    opacity: 1; /* Ensure visibility */
  }

  /* Change bullet color when active */
  .swiper-pagination-bullet-active {
    background-color: #ff1493; /* Darker pink for active bullet */
  }
  background-color: pink;
  .text-block {
    //height: 350px;
    //width: 350px;
    height: 90vh;
    width: 90vw;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100%;
    color: #ff69b4; /* Cute pink color */
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    line-height: 1.5;
    .cute-image {
      height: 200px;
      width: 200px;
      background-size: contain;
    }
  }
`;
