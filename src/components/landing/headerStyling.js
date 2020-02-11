import styled, { keyframes } from "styled-components";
import {
  headerHeight,
  landingHeader,
  landingHeadFootOpacity,
  landingHeaderFont,
  transition,
  buttonBlue
} from "../../views/styling";

// Create the keyframes
const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;
// create a component that will rotate everything we pass in
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 8s linear infinite;
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
  position: fixed;
  top: 0;
  padding: 0 10px;

  .image {
    height: 25px;
    width: 25px;

    img {
      cursor: pointer;
      max-height: 100%;
      width: auto;
      transition: all 1s;
    }
  }

  .links {
    display: flex;
  }

  p {
    text-align: center;
    cursor: pointer;
    color: ${landingHeaderFont};
    padding: 0 10px;
    font-size: 1rem;
    font-weight: bold;
    transition: all ${transition};

    @media (pointer: fine) {
      &:hover {
        color: ${buttonBlue};
        transform: scale(1.2);
      }
    }

    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`;
