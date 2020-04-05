import styled from "styled-components";
import { Container } from "../reusable/containerStyling";
import { mediaBreak, landingCaptionBorder, landingCaption, transition, borderRad, fontColourDarkMode, landingCaptionDark, landingCaptionMaxWidth, buttonOrange } from "../../views/styling";

export const Captions = styled(Container)`
  max-width: ${landingCaptionMaxWidth};
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

  a {
    color: inherit
    margin: auto;
    margin-bottom: 20px;
    width: 85%;

    @media (min-width: ${mediaBreak}) {
      margin: 0 80px 40px 80px;
      width: 450px;
      // min-height: 80px;
    }
  }

  h5 {
    background-color: ${landingCaption};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${landingCaptionBorder};
    border-radius: ${borderRad};
    // width: 85%;
    min-height: 70px;
    transition: all ${transition};

    @media (min-width: ${mediaBreak}) {
      // margin: 0 80px 40px 80px;
      width: 450px;
      min-height: 80px;
    }

    @media (pointer: fine) {
      &:hover {
        transform: scale(1.1);
        border-color: ${buttonOrange}
        color: ${buttonOrange}
      }
    }
  }

  h5.darkmode {
    background-color: ${landingCaptionDark};
    // color: ${fontColourDarkMode}
  }
`;
