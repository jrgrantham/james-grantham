import React from "react";
import { Formik } from "formik";
import axios from "axios";
import styled from "styled-components";
import url from "../helpers/url";

import { StyledForm } from "../components/reusable/ContactForm";
import Spinner from "../components/reusable/Spinner";
import { LinkButton } from "../components/reusable/Buttons";
import { fontColourDarkMode, buttonBlue, borderRad, transition } from "./styling";

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
              <div className="inputField">
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <div></div>
              </div>
              <div className="inputField">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <LinkButton className='home'
                target="/"
                content="Home"
              />
            </StyledForm>
          </Position>
        )}
      </Formik>
    );
  }
}

const Position = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: ${fontColourDarkMode};
    font-weight: bold;
    background-color: ${buttonBlue};
    padding: 1rem 3.6rem;
    border-radius: ${borderRad}px;
    transition: opacity ${transition}s;
    margin: 20px 0 70px 0;

    @media (pointer: fine) {
      &:hover {
        opacity: 0.75;
      }
    }
  }
`;
