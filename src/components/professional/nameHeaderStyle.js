import styled from "styled-components";
import { professionalBack, professionalButtonHov, professionalLinks, transition, mediaBreak, borderRad } from "../../views/styling";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${borderRad};
`;
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem 0;
  width: 300px;
  background-color: ${professionalBack};
  border-radius: ${borderRad};
  cursor: pointer;
`;
export const StyledHiddenDiv = styled.div`
  display: flex;
  flex-direction: columm;
  justify-content: space-between;
  align-items: flex-end;
  height: 0px;
  width: 100%;
  overflow: hidden;
  transition: height ${transition};

  @media (min-width: ${mediaBreak}) {
    width: 100%;
  };

  .hover {
    @media (pointer: fine) {
      &:hover {
        background-color: ${professionalButtonHov};
        transition: background-color ${transition};
      }
    }
  }
`;
export const openDiv = {
  height: "55px"
};
export const styledButton = {
  minWidth: "30%",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem",
  display: "block",
  padding: "10px 10px",
  backgroundColor: professionalLinks,
  borderRadius: borderRad
};
