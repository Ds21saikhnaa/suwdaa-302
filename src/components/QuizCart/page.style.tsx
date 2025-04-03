// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const ContainerWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .quiz-title {
    font-size: 1.5rem;
    text-align: center;
    margin: 20px 0;
    font-family: 'Comic Sans MS', 'Arial', sans-serif; /* Cute font style */
    transition:
      transform 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }
  .quiz-title.question {
    color: #ff7eb3; /* Bright pink */
    text-shadow: 2px 2px 5px rgba(255, 126, 179, 0.6); /* Soft shadow for glow effect */
    transform: scale(1.05); /* Slightly larger for emphasis */
  }
  .quiz-title.just-question {
    color: #7ec8e3; /* Light blue */
    text-shadow: 1px 1px 3px rgba(126, 200, 227, 0.6); /* Soft shadow for glow effect */
  }
  .cute-input {
    width: 100%;
    max-width: 400px;
    padding: 10px 15px;
    font-size: 1rem;
    font-family: 'Comic Sans MS', 'Arial', sans-serif; /* Cute font */
    border: 2px solid #ff7eb3; /* Bright pink border */
    border-radius: 25px; /* Rounded edges for cuteness */
    outline: none; /* Remove default outline */
    background-color: #fffdf9; /* Soft off-white background */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for a floating effect */
    transition: all 0.3s ease-in-out; /* Smooth transition for effects */
    color: #333; /* Neutral text color */
  }

  .cute-input::placeholder {
    color: #ffb6c1; /* Light pink placeholder */
    font-style: italic; /* Adds a playful touch */
  }

  .cute-input:focus {
    border-color: #ffa6c9; /* Lighter pink for focus */
    background-color: #fff0f6; /* Slightly pinkish background on focus */
    box-shadow: 0 0 10px rgba(255, 126, 179, 0.5); /* Glow effect on focus */
  }

  .cute-input:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Slightly deeper shadow on hover */
  }

  .ad {
    background: linear-gradient(135deg, #ff7eb3, #ff758c);
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    padding: 0 20px;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .ad:hover {
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }

  .ad:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
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
    height: 350px;
    width: 350px;
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
    color: #ff69b4; /* Cute pink color */
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    line-height: 1.5;
  }
`;
