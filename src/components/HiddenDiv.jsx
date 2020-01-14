import React from 'react'
import styled from 'styled-components'

export default function HiddenDiv() {
  return (
    <StyledHidden>
      TEST
    </StyledHidden>
  )
}

const StyledHidden = styled.div`
  height: 100px
  background-color: red
`