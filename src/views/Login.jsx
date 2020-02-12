import React from "react";
import { Formik } from "formik";
import axios from "axios";
import styled from "styled-components";
import url from "../helpers/url";

import { StyledForm } from "./ContactForm";
import Spinner from "../components/reusable/Spinner";
import { LinkButton } from "../components/reusable/Buttons";

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
              <div className="inputField">
                {/* <label htmlFor="username">Name</label> */}
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
                {/* <label htmlFor="password">Password</label> */}
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
                Login
              </button>
              <LinkButton
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

  label {
    height: 20px;
  }

  @media (min-height: 850px) {
    min-height: 100vh;
    justify-content: center;
  }
`;
