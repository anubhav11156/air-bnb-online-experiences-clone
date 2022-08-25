import React from 'react'
import styled from 'styled-components'
import Cards from './cards'

function DynamicPart() {
    return (
        <Container>
          <Cards />
        </Container>
    )
}

export default DynamicPart

const Container=styled.div`
  flex:1;
  background-color: white;
  display:flex;
  align-items: center;
  justify-content: space-between;
`
