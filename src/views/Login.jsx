import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import styled from "styled-components";
import url from "../helpers/url";
import Spinner from "../components/Spinner";

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
              props.history.push("/personal/phonenumbers");
              localStorage.setItem("token", response.data.token);
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
          <StyledForm onSubmit={handleSubmit}>
            {/* <div> */}
            <div className="inputField">
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
            <div className="inputField">
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

            <Link to='/' style={{color: 'lightgrey', 'font-size': '1.2rem'}}>Return to home page</Link>

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
        )}
      </Formik>
    );
  }
}

const StyledForm = styled.form`
  margin-top: 50px
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  padding: 50px
  
  @media (min-width: 800px) {
    margin: 150px 100px 0 100px
    border: 1px solid lightgrey
    border-radius: 10px
  }

  .inputField {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  label {
    font-size: 1.2rem;
    padding: 15px 0 10px 0
  }

  input {
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    border: solid 0.5px lightgrey;
    width: 250px;
  }

  button {
    margin: 40px 40px 80px 40px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.6rem 0rem;
    width: 200px

    &:hover{
      background-color: white;
      color: green;
    }
  }
`;
