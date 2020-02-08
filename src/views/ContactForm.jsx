import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import Error from "../helpers/Error";
import { validationSchema } from "../helpers/validationSchema";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { axiosWithBase } from "../helpers/AxiosCustom";

import { borderRad, transition } from "../views/styling";
import Footer from "../components/professional/Footer";

const initalSignupForm = {
  name: "",
  message: "",
  email: ""
};

export function RegisterForm(props) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initalSignupForm}
      onSubmit={(values, actions) => {
        props.loadingStarted();
        const newUser = {
          name: values.name,
          message: values.message,
          email: values.email
        };
        actions.setSubmitting(true);
        axiosWithBase()
          .post("/conact", newUser)
          .then(() => {
            actions.resetForm();
            actions.setSubmitting(false);
            props.loadingFinished();
            props.history.push("/confirmation");
          })
          .catch(err => {
            // toast.error(err.response.statusText);
            actions.setSubmitting(false);
            props.loadingFinished();
          });
      }}
    >
      {({
        values,
        errors,
        handleBlur,
        handleChange,
        touched,
        handleSubmit,
        isSubmitting
      }) => (
        <Position>
          <StyledForm onSubmit={handleSubmit}>
            <div data-testid="nameField" className="inputField">
              {/* <label htmlFor="name">Name</label> */}
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "has-error" : null}
              />
            </div>

            <div data-testid="emailField" className="inputField">
              {/* <label htmlFor="email">E-mail address</label> */}
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : null}
              />
            </div>

            <div data-testid="messageField" className="inputField">
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                name="message"
                type="text"
                placeholder="Enter your message"
                id="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                className={
                  touched.message && errors.message ? "has-error" : null
                }
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            {/* <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                closeButton={false}
                style={{
                  'font-size': '1.5rem',
                  width: '400px',
                  'text-align': 'center'
                }}
              /> */}
            <Error touched={touched.name} message={errors.name} />
            <Error touched={touched.email} message={errors.email} />
            <Error touched={touched.message} message={errors.message} />
          </StyledForm>
          <Footer />
        </Position>
      )}
    </Formik>
  );
}

export default RegisterForm;

const Position = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media (min-height: 850px) {
    min-height: 100vh;
    justify-content: center;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  .inputField {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  input,
  textarea {
    min-height: 50px;
    font-size: 1rem;
    text-align: center;
    padding: 10px;
    border-radius: ${borderRad};
    border: solid 0.5px lightgrey;
    width: 300px;
  }

  textarea {
    height: 100px;
  }

  button {
    margin: 20px 0;
    background-color: #ff8d1e;
    color: white;
    border-radius: ${borderRad};
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem 0rem;
    width: 200px;

    @media (pointer: fine) {
      &:hover {
        background-color: white;
        color: green;
        transition: background-color ${transition};
      }
    }
  }

  .has-error {
    border: solid 0.5px red;
  }

  .invalid {
    font-size: 1rem;
    color: red;
  }

  .valid {
    font-size: 1rem;
    color: green;
  }
`;
