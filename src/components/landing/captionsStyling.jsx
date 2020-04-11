import styled from "styled-components";
import { Container } from "../reusable/containerStyling";
import {
  mediaBreak,
  landingCaptionBorder,
  landingCaption,
  transition,
  borderRad,
  landingCaptionDark,
  landingCaptionMaxWidth,
  buttonOrange,
} from "../../views/styling";

export const Captions = styled(Container)`
  max-width: ${landingCaptionMaxWidth};
  margin-bottom: 40px;
  
  .caption {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
  }
  
  @media (min-width: ${mediaBreak}) {
    padding: 0 50px;
    .left {
      justify-content: flex-start;
    }
    .right {
      justify-content: flex-end;
    }
  }

  a {
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    min-height: 60px;
    background-color: ${landingCaption};
    border: 1px solid ${landingCaptionBorder};
    border-radius: ${borderRad}px;
    transition: transform ${transition}s, border ${transition}s, color ${transition}s;

    @media (min-width: ${mediaBreak}) {
      width: 450px;
      min-height: 70px;
    }

    @media (pointer: fine) {
      &:hover {
        transform: scale(1.05);
        border: 2px solid ${buttonOrange};
        color: ${buttonOrange};
      }
    }
  }

  a.darkmode {
    background-color: ${landingCaptionDark};
  }
`;
