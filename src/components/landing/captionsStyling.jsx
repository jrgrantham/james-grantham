import styled from "styled-components";
import { Container } from "../reusable/containerStyling";
import { mediaBreak, landingCaptionBorder, landingCaption, appWidth, transition, borderRad } from "../../views/styling";

export const Captions = styled(Container)`
  max-width: ${appWidth};
  align-items: stretch;

  @media (min-width: ${mediaBreak}) {
    .left {
      justify-content: flex-start;
    }
    .right {
      justify-content: flex-end;
    }
  }
  
  .caption {
    display: flex;
  }

  h4 {
    background-color: ${landingCaption};
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${landingCaptionBorder};
    border-radius: ${borderRad};
    width: 85%;
    min-height: 70px;
    transition: all ${transition};

    @media (min-width: ${mediaBreak}) {
      margin: 0 80px 40px 80px;
      width: 500px;
      min-height: 100px;
    }

    @media (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
