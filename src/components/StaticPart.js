import React from 'react'
import styled from 'styled-components'

function StaticPart() {
    return (
        <Container>
          <Header>
            <img src="/images/airbnb-logo.png"/>
          </Header>

          <ImagePart>
            <img src="/images/Group.png"/>
          </ImagePart>

          <TextPart>
            <div className="heading">
              Online Experiences
            </div>
            <div className="content">
              <p>Join unique interactive activities led by one-of-a kind hosts--all without leaving home.</p>
            </div>
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
    cursor: pointer;
  }

`
const ImagePart=styled.div`
  background-color: white;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 67%;
  }
`
const TextPart=styled.div`
  background-color: white;
  flex:1;
  display: flex;
  flex-direction: column;

  .heading {
    flex: 0.5;
    font-family: Poppins;
    font-weight: 600;
    font-size: 36px;
    padding-left: 25px;
  }

  .content {
    flex:1;
    padding-left: 25px;
     p {
       width: 300px;
       font-size: 15px;
       font-family: Poppins;
       font-weight: 300;
     }
  }
`
