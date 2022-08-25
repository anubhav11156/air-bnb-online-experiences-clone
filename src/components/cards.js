import React from 'react'
import styled from 'styled-components'

function Cards() {
    return (
        <Container>
          <PofilePicture>
            <img src="images/katie.png"/>
              <BuyStatus>
                <p>SOLD OUT</p>
              </BuyStatus>
          </PofilePicture>

          <Void>
          </Void>

          <Description>
            <Rating>
              <div className="img-div">
                <img src="images/Star.png"/>
              </div>
              <div className="rating-div">
                <p className="rating">5.0</p>
                <p className="number">(6) </p>
                <p className="country"> &#8226; USA</p>
              </div>
            </Rating>
            <Title>
              <p>
                Life Lesson with Katie Zaferes
              </p>
            </Title>
            <Price>
              <p><span>From $136</span> / person</p>
            </Price>
          </Description>
        </Container>
    )
}

export default Cards

const Container=styled.div`
  position: relative;
  left:18px;
  width: 190px;
  height: 310px;
  background-color: White;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const PofilePicture=styled.div`
  position:relative;
  z-index: 10;
  width: 172px;
  height: 225px;
  background-color: grey;
  border-radius: 10px;
  display:flex;
  overflow: hidden;

  img {
    position: relative;
    width: 172px;
    object-fit: cover;
  }
`

const Void=styled.div`
  width: 172px;
  height: 18px;
`

const Description=styled.div`
  position:relative;
  bottom:9px;
  width: 172px;
  flex:1;
  background-color:White;
  display:flex;
  flex-direction: column;
`

const Rating=styled.div`
  flex:1;
  background-color: white;
  display:flex;
  align-items: center;

  .img-div {
    flex:0.5;
    margin-left:1px;
    img {
      width: 15px;
    }
  }

  .rating-div {
    flex:3.2;
    display:flex;
    p{
      margin: 0;
      font-family: Poppins;
      font-weight: 300;
      font-size: 14px;
      margin-right: 2px;
    }

    .number,
    .country {
      color: rgba(145, 142, 155, 1);
    }
  }
`

const Title=styled.div`
  flex:1;
  background-color: white;

  p {
    margin: 0;
    font-family: Poppins;
    font-weight: 300;
    font-size:12px;
  }
`

const Price=styled.div`
  flex:1;
  background-color: white;
  p {
    margin: 0;
    font-family: Poppins;
    font-weight: 300;
    font-size:12px;
  }

  span {
    font-weight: 600;
  }
`
const BuyStatus=styled.div`
  position: absolute;
  z-index: 100;
  width: 70px;
  height:20px;
  background-color: white;
  top: 8px;
  left: 8px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
   p {
     font-size: 12px;
     font-family: Poppins;
     font-weight: 300;
   }
   cursor: pointer;
`
