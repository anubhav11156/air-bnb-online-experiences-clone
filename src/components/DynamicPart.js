import React from 'react'
import styled from 'styled-components'
import Cards from './cards'

function DynamicPart() {
    return (
        <Container>
          <Cards
            backgroundImg="katie.png"
            starRating="5.0"
            country="USA"
            price="136"
            maxRating="6"
            description="Life lessons with Katie Zaferes"
            buyStatus="SOLD OUT"
          />

          <Cards
            backgroundImg="wedding.webp"
            starRating="5.0"
            country="USA"
            price="125"
            maxRating="30"
            description="Learn wedding photography"
            buyStatus="ONLINE"
          />

          <Cards
            backgroundImg="mountain-biking.jpg"
            starRating="4.8"
            country="USA"
            price="50"
            maxRating="2"
            description="Group Mountain Biking"
            buyStatus="ON SALE"
          />
        </Container>
    )
}

export default DynamicPart

const Container=styled.div`
  flex:1;
  background-color: white;
  display:flex;
  align-items: center;
  gap: 15px;
`
