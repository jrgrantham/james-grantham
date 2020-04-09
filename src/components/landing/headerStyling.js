import styled, { keyframes } from "styled-components";
import {
  headerHeight,
  landingHeader,
  landingHeadFootOpacity,
  landingHeaderFont,
  transition,
  buttonBlue,
  appWidth
} from "../../views/styling";

// Create the keyframes
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
// create a component that will rotate everything we pass in
export const Rotate = styled.div`
  animation: ${rotate} 8s ease-in-out infinite;
  animation-delay: 5s;
`;
export const Header = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${landingHeader};
  opacity: ${landingHeadFootOpacity};
  height: ${headerHeight}px;
  width: 100%;
  max-width: ${appWidth}px;
  position: fixed;
  top: 0;
  padding: 0 10px;

  .image {
    position: relative;
    transition: all ${transition}s;
    height: 25px;
    width: 25px;

    img {
      cursor: pointer;
      max-height: 100%;
      width: auto;
      transition: all ${transition}s;
    }

    @media (pointer: fine) {
      &:hover {
        transform: scale(1.5);
      }
    }
  }

  .links {
    display: flex;
  }

  .remove {
    @media (max-width: 550px) {
      display: none;
    }
  }

  p {
    text-align: center;
    cursor: pointer;
    color: ${landingHeaderFont};
    padding: 0 10px;
    font-size: 1rem;
    font-weight: bold;
    transition: all ${transition}s;

    @media (pointer: fine) {
      &:hover {
        color: ${buttonBlue};
        transform: scale(1.3);
      }
    }

    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`;
