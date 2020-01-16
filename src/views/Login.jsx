import React from "react";
import { Formik } from "formik";
import axios from "axios";
import styled from "styled-components";
import url from "../helpers/url";

import Spinner from "../components/Spinner";
import { whiteOff, transition, borderRad } from "./styling";
import Footer from "../components/Footer";

const loginApi = url() + "api/auth/login";
const initialLoginForm = {
  username: "",
  password: ""
};

export default function LoginForm(props) {
  if (props.isLoading) {
    return <Spinner />;
  } else {
    return (
      <Formik
        initialValues={initialLoginForm}
        onSubmit={(values, actions) => {
          const user = {
            username: values.username,
            password: values.password
          };
          props.setIsLoading(true);
          actions.setSubmitting(true);
          axios
            .post(loginApi, user)
            .then(response => {
              actions.resetForm();
              actions.setSubmitting(false);
              props.setIsLoading(false);
              props.setToken(response.data.token);
              props.setUser(response.data.user);
              props.history.push("/phonenumbers");
            })
            .catch(error => {
              console.log(error);
              actions.resetForm();
              actions.setSubmitting(false);
              props.setIsLoading(false);
            })
            .finally(() => {});
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <Position>
            <StyledForm onSubmit={handleSubmit}>
              {/* <div> */}
              <div>
                <label htmlFor="username" />
                <input
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  id="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
              </div>
              <div>
                <label htmlFor="password" />
                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              <Footer />
            </StyledForm>
          </Position>
        )}
      </Formik>
    );
  }
}

const Position = styled.div`
  display: flex
  flex-direction: column

  @media (min-height: 850px) {
    min-height: 100vh
    justify-content: center
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between
  margin: auto
  height: 350px

  input {
    font-size: 1rem;
    text-align: center;
    padding: 10px;
    border-radius: ${borderRad}
    border: solid 0.5px lightgrey;
    width: 250px;
  }

  button {
    margin-top: 30px
    background-color: green;
    color: ${whiteOff};
    border-radius: ${borderRad};
    font-size: 1.2rem;
    padding: 0.6rem 0rem;
    width: 200px

    @media (pointer:fine) {
      &:hover{
        background-color: white;
        color: green;
        transition: background-color ${transition}
      }
    }
  }

`;
