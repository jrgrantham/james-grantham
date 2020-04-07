import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { validationSchema } from "../../helpers/validationSchema";
// import Error from "../../helpers/Error";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import url from "../../helpers/url";
import { borderRad, transition, buttonBlue, fontColourDarkMode, appColour, landingCaptionBorder } from "../../views/styling";

const sendmailApi = url() + "sendmail";

const initalSignupForm = {
  name: "",
  message: "",
  email: ""
};

export default function Contact(props) {
  const { showContactMe, setShowContactMe } = props

  return (
    <Formik 
      validationSchema={validationSchema}
      initialValues={initalSignupForm}
      onSubmit={(values, actions) => {
        const newUser = {
          name: values.name,
          message: values.message,
          email: values.email
        };
        actions.setSubmitting(true);
        axios
          .post(sendmailApi, newUser)
          .then(() => {
            actions.resetForm();
            setShowContactMe(false);
            actions.setSubmitting(false);
          })
          .catch(err => {
            actions.setSubmitting(false);
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
        <Position style={showContactMe ? showForm : null}>
          <StyledForm
            onSubmit={handleSubmit}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <div data-testid="nameField" className="inputField">
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

            {/* <AnchorButton
              type="submit"
              disabled={isSubmitting}
              content="Submit"
              color={buttonBlue}
              margin='30px'
            /> */}
            <button type='submit' disabled={isSubmitting}>Submit</button>

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
            {/* <Error touched={touched.name} message={errors.name} />
            <Error touched={touched.email} message={errors.email} />
            <Error touched={touched.message} message={errors.message} /> */}
          </StyledForm>
        </Position>
      )}
    </Formik>
  );
}

const Position = styled.div`
  margin: 10px 0;
  // padding: 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 2s;
`;

const showForm = {
  maxHeight: "500px"
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
  width: 100%;
  max-width: 500px;
  overflow: auto;
  border-radius: 15px;
  padding: 20px;
  background: ${landingCaptionBorder}
  // border: 1px solid red;

  .inputField {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  input,
  textarea {
    background: ${appColour}
    min-height: 50px;
    font-size: 1rem;
    text-align: center;
    padding: 10px;
    width: 90%;
    max-width: 400px;
    border-radius: ${borderRad}px;
    border: 1px solid ${landingCaptionBorder};
  }

  button {
    display: block;
    color: ${fontColourDarkMode};
    font-weight: bold;
    background-color: ${buttonBlue};
    padding: 1rem 3.6rem;
    border-radius: ${borderRad}px;
    transition: opacity ${transition}s;
    margin: 30px 0 10px 0;
    border: none;
    font-size: 1.2rem;

    @media (pointer: fine) {
      &:hover {
        opacity: 0.75;
      }
    }
  }

  textarea {
    height: 100px;
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
