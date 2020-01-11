import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axiosWithAuth from '../authentication/axiosWithAuth'
import url from '../helpers/url'

const numberApi = `${url()}api/users/numbers`
console.log(numberApi);

export default function PhoneNumbers() {
  const [numbers, setNumbers] = useState([])
  const getNumbers = () => {
    axiosWithAuth()
    .get(numberApi)
    .then(res => {
      const apiNumbers = res.data
      console.log(apiNumbers)
      setNumbers(apiNumbers)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  function callNumber(number) {
    window.location = `tel:${number}`
  }
  
  useEffect(() => {
    getNumbers()
  }, [])
  
  if (numbers) {
    return (
      <Container>
        {numbers.map(number => (
          <Card onClick={() => callNumber(number.phoneNumber)} key={number.id}>
            <h3>{number.name}</h3>
            <h3>{number.phoneNumber}</h3>
          </Card>
        ))}
      </Container>
    )
  } else {
    return <h2>Please wait...</h2>
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh
`

const Card = styled.div`
  margin: 20px
  padding: 5px;
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