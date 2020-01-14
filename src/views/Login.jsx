import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import styled from "styled-components";
import url from "../helpers/url";

import Spinner from '../components/Spinner'
import { appColor, color, transition } from "./styling";
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
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("user", response.data.user);
              props.history.push("/personal/phonenumbers");
            })
            .catch(error => {
              console.log(error);
              // toast.error(error.response.statusText);
              actions.resetForm();
              actions.setSubmitting(false);
              props.setIsLoading(false);
            });
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <Position>
            <StyledForm onSubmit={handleSubmit}>
              {/* <div> */}
              <div >
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
              <div >
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
  
              <Link to="/" style={{ color: color, "font-size": "1.2rem" }}>
                <p>
                  Return to home page
                </p>
              </Link>
              {/* <Footer /> */}
              {/* <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                closeButton={false}
                style={{
                  "font-size": "1.5rem",
                  width: "400px",
                  "text-align": "center"
                }}
              /> */}
              {/* </div> */}
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
  justify-content: space-evenly
  margin: auto
  padding: 100px 0
  height: 600px
  // border: 1px solid red

  input {
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    border: solid 0.5px lightgrey;
    width: 250px;
  }

  button {
    background-color: green;
    color: ${appColor};
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.6rem 0rem;
    width: 200px

    &:hover{
      background-color: white;
      color: green;
      transition: background-color ${transition}
    }
  }

  p {
    padding-top: 30px
  }
`;
