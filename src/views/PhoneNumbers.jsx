import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axiosWithAuth from '../authentication/axiosWithAuth'
import url from '../helpers/url'

const numberApi = `${url()}api/users/numbers`
// console.log(numberApi);

export default function PhoneNumbers(props) {
  const [numbers, setNumbers] = useState([])
  const getNumbers = () => {
    axiosWithAuth()
    .get(numberApi)
    .then(res => {
      const apiNumbers = res.data
      // console.log(apiNumbers)
      setNumbers(apiNumbers)
    })
    .catch(err => {
      // console.log(err.message)
      props.history.push('/login')
    })
  }
  
  function callNumber(number) {
    window.location = `tel:${number}`
  }
  
  useEffect(() => {
    getNumbers()
  }, [])
  
    return (
      <Container>
        {numbers.map(number => (
          <Card onClick={() => callNumber(number.phoneNumber)} key={number.id}>
            <h4>{number.name}</h4>
            <h4>{number.phoneNumber}</h4>
          </Card>
        ))}
      </Container>
    )

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto
  // height: 80vh
  // border: 1px solid red
`

const Card = styled.div`
  margin: 20px
  padding: 15px;
  min-width: 300px

  border: 1px solid lightblue;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    color: red;
    border-color: red
}
`