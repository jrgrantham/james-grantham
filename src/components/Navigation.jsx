import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation(props) {
  return (
    <>
      <Link to="/">
        <StyledH3>James Grantham</StyledH3>
      </Link>
      <StyledNavigation>
        <NavLink activeClassName="activeLink" to="/professional/background">
          History
        </NavLink>
        <NavLink activeClassName="activeLink" to="/professional/Work">
          Work
        </NavLink>
        <NavLink
          activeClassName="activeLink"
          to="/professional/web-development"
        >
          Web-Dev
        </NavLink>
      </StyledNavigation>
    </>
  );
}

const StyledH3 = styled.h3`
  margin-top: 1rem
`

const StyledNavigation = styled.div`

  margin: 1rem
  display: flex
  justify-content: center
  // border: 1px solid red

  @media (max-width: 370px) {
    flex-direction: column;
  }

  .activeLink {
    background-color: lightblue;
    color: #252525
  }

  a {
    font-size: 1rem
    margin: 0.25rem 0.5rem
    min-width: 70px
    padding: .5rem .7rem
    border: 0.5px solid lightblue
    border-radius: 5px
    cursor: pointer
  
    @media (min-width: 550px) {
      margin: 0.25rem 2rem
      width: 120px
    }
  }
`;
