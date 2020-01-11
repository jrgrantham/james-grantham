import React, { useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import url from '../helpers/url'

const loginApi = url()+'api/auth/login'

function LoginForm(props) {
  const usernameRef = useRef('')
  const passwordRef = useRef('')

  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }
    axios
      .post(loginApi, data)
      .then(response => {
        console.log(response.data);
        alert(`Welcome back ${response.data.user}!!`)
        // props.setUser(response.data.user)
        localStorage.setItem('token', response.data.token)
        props.history.push('/personal/phonenumbers')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        {/* <h3>User name:</h3> */}
        <StyledInput
          name="username"
          type="text"
          placeholder="username"
          ref={usernameRef}
        />
        {/* <h3>Password:</h3> */}
        <StyledInput
          name="password"
          type="password"
          placeholder="password"
          ref={passwordRef}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </div>
  )
}

export default LoginForm

// Styling here:

const StyledInput = styled.input`
  margin: 5px;
  background-color: #252525;
  color: lightblue;
  border-radius: 10px;
  border: 2px solid lightblue
  padding: 0.6rem;
  font-size: 2rem;
  text-align: center;
`

const StyledButton = styled.button`
margin: 5px;
background-color: #252525;
  color: lightblue;
  border-radius: 10px;
  border: 2px solid lightblue
  padding: 10px 20px;
  font-size: 2rem;
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 2vw;
  background: lightblue;
  p {
    text-align: center;
  }
`
