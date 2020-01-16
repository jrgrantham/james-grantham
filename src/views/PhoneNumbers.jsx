import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../authentication/axiosWithAuth";
import url from "../helpers/url";

import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import { backgroundColor, color, transition, backgroundColorHover, borderRad } from "./styling";

const numberApi = `${url()}api/users/numbers`;

export default function PhoneNumbers(props) {
  const [numbers, setNumbers] = useState([]);

  const getNumbers = () => {
    props.setIsLoading(true);
    axiosWithAuth(props.token)
      .get(numberApi)
      .then(res => {
        setNumbers(res.data);
        props.setIsLoading(false);
      })
      .catch(err => {
        props.setIsLoading(false);
        props.history.push("/login");
      })
      .finally(() => {
        props.setToken('');
      });
  };

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input])

  useEffect(() => {
    getNumbers();
  }, []);

  function callNumber(number) {
    window.location = `tel:${number}`;
    props.history.push("/")
  }

  if (props.isLoading) {
    return <Spinner />;
  } else {
    return (
      <Container>
        <h3>Hi {props.user}!</h3>
        <h4>Here are your numbers...</h4>
        {numbers.map(number => (
          <NumberCard
            onClick={() => callNumber(number.phoneNumber)}
            key={number.id}
          >
            <h6>{number.name}</h6>
            <h6>{number.phoneNumber}</h6>
          </NumberCard>
        ))}
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 40px
  }
  h4 {
    margin-top: 20px
    margin-bottom: 10px
  }

  @media (min-height: 850px) {
    justify-content: center;
  }
`;

const NumberCard = styled.div`
  margin-top: 25px
  padding: 15px;
  width: 250px
  height: 100px

  border: 1px solid ${color};
  border-radius: ${borderRad};
  background-color: ${backgroundColor}

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: ${transition}
    }
  }
`;
