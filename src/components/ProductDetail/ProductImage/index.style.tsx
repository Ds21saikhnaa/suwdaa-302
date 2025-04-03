// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const ImageProviderStyle = styled.div`
  display: flex;
  flex-direction: column;
  .pr-view {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-left-width: 50px;
    border-right-width: 50px;
    border-top-width: 15px;
    border-bottom-width: 15px;
    border-style: solid;
    border-color: transparent;
    z-index: 1001;
    outline: none;
    text-align: center;
  }
  .swiper {
    width: 100%;
    //height: 300px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
  .image-container {
    white-space: nowrap;
    overflow: hidden;
    font-size: 0;
    position: relative;
    border-radius: 5px;
    background: #e0e0e0;
    max-width: 870px;
    width: 870px;
    height: 600px;
    .main-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 5px;
      transition: all 0.3s;
    }
  }

  .often-images {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    gap: 20px;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      background: #e0e0e0;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
`;
