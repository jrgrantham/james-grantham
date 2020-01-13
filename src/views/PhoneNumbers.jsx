import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../authentication/axiosWithAuth";
import url from "../helpers/url";

import Spinner from '../components/Spinner'
import { color } from "./styling";

const numberApi = `${url()}api/users/numbers`;

export default function PhoneNumbers(props) {
  const [numbers, setNumbers] = useState([]);

  const getNumbers = () => {
    props.setIsLoading(true);
    axiosWithAuth()
      .get(numberApi)
      .then(res => {
        setNumbers(res.data);
        props.setIsLoading(false);
      })
      .catch(err => {
        props.setIsLoading(false);
        props.history.push("/login");
      });
  };

  function callNumber(number) {
    window.location = `tel:${number}`;
  }

  useEffect(() => {
    getNumbers();
  }, []);

  if (props.isLoading) {
    return <Spinner />;
  } else {
    return (
      <Container>
        <h2>{localStorage.getItem("user")}</h2>
        {numbers.map(number => (
          <Card onClick={() => callNumber(number.phoneNumber)} key={number.id}>
            <h4>{number.name}</h4>
            <h4>{number.phoneNumber}</h4>
          </Card>
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  h2 {
    margin: 10px
  }

  // height: 80vh
  // border: 1px solid red
`;

const Card = styled.div`
  margin: 20px
  padding: 15px;
  min-width: 250px

  border: 1px solid ${color};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    color: red;
    border-color: red
}
`;
