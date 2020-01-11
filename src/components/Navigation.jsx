import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation(props) {
  return (
    <StyledNavigation>
      <NavLink activeClassName="activeLink" to="/professional/background">
        History
      </NavLink>
      <NavLink activeClassName="activeLink" to="/professional/Work">
        Work
      </NavLink>
      <NavLink activeClassName="activeLink" to="/professional/web-development">
        Web-Dev
      </NavLink>
    </StyledNavigation>
  );
}

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
    margin: 0.25rem
    min-width: 70px
    padding: .5rem .7rem
    border: 1px solid lightblue
    border-radius: 5px
    cursor: pointer
  
    @media (min-width: 550px) {
      margin: 0.25rem 2rem
      width: 120px
    }
  }
`;
