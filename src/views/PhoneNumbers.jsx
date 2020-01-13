import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../authentication/axiosWithAuth";
import url from "../helpers/url";

import Spinner from "../components/Spinner";
import { appColor, backgroundColor, color } from "./styling";
import Footer from "../components/Footer";

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
        <h2>Hi, {localStorage.getItem("user")}</h2>
        <h3>Here are your numbers...</h3>
        {numbers.map(number => (
          <Card onClick={() => callNumber(number.phoneNumber)} key={number.id}>
            <h4>{number.name}</h4>
            <h4>{number.phoneNumber}</h4>
          </Card>
        ))}
        <Link to="/" style={{ color: color, "font-size": "1.2rem" }}>
          Return to home page
        </Link>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  h3 {
    margin-top: 25px;
  }

  a {
    padding: 30px 0 50px 0
    // margin-top: 15px;
  }
`;

const Card = styled.div`
  margin-top: 25px
  padding: 15px;
  min-width: 250px

  border: 1px solid ${color};
  border-radius: 10px;
  background-color: ${backgroundColor}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
