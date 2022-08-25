import React from 'react'
import styled from 'styled-components'

function StaticPart() {
    return (
        <Container>
          <Header>
            <img src="/images/airbnb-logo.png"/>
          </Header>

          <ImagePart>

          </ImagePart>

          <TextPart>

          </TextPart>
        </Container>
    )
}

export default StaticPart

const Container=styled.div`
  flex:1.5;
  display: flex;
  flex-direction: column;
`

const Header=styled.div`
  z-index: 100;
  background-color: white;
  height:72px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0.5px 12px rgba(69, 65, 65, 0.24);

  img {
    margin-left: 30px;
    width: 95px;
  }

`
const ImagePart=styled.div`
  background-color: white;
  height: 240px;
`
const TextPart=styled.div`
  background-color: green;
  flex:1;
`
