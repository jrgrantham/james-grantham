import React from "react";
import { Formik } from "formik";
import axios from "axios";
import styled from "styled-components";
import url from "../helpers/url";

import { StyledForm } from "../components/reusable/ContactForm";
import Spinner from "../components/reusable/Spinner";
import { LinkButton } from "../components/reusable/Buttons";

import ben from '../images/b192.png'
import sam from '../images/s192.png'
import ollie from '../images/o192.png'
import { borderRad, landingCaptionBorder } from "./styling";

const loginApi = url() + "api/auth/login";
const initialLoginForm = {
  username: "",
  password: "",
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
            password: values.password,
          };
          props.setIsLoading(true);
          actions.setSubmitting(true);
          axios
            .post(loginApi, user)
            .then((response) => {
              actions.resetForm();
              actions.setSubmitting(false);
              props.setIsLoading(false);
              props.setToken(response.data.token);
              props.setUser(response.data.user);
              props.history.push("/phonenumbers");
            })
            .catch((error) => {
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
              {/* <AnchorButton target="/" content="Home" /> */}
              <LinkButton target="/" content="Home" className='home' margin='60px 0 70px 0'/>
              <div className='boys'>
                <a href="/">O</a>
                <a href="https://samgrantham.netlify.com/">S</a>
                <a href="https://bengrantham.netlify.com/">B</a>
              </div>
            </StyledForm>
            <s id="horizontalMenu"></s>
            <s id="professionalName"></s>
          </Position>
        )}
      </Formik>
    );
  }
}

const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  margin: auto;

  .home {
    // margin: 70px 0 0 0;
  }

  .boys {
    display: flex;
    justify-content: space-between;
    width: 180px;
    
    a {
      color: ${landingCaptionBorder};
      border: 1px solid ${landingCaptionBorder};
      padding: 10px;
      height: 50px;
      width: 50px;
      border-radius: ${borderRad}px;
    }
  }
`;
