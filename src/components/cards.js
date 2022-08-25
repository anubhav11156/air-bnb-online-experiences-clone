import React from 'react'
import styled from 'styled-components'

function Cards(props) {
  const backgroundImg=`/images/${props.backgroundImg}`;
  const starRating=props.starRating;
  const country=props.country;
  const description=props.description;
  const maxRating=props.maxRating;
  const price=props.price;
  const buyStatus=props.buyStatus;
    return (
        <Container>
          <PofilePicture>
            <img src={backgroundImg}/>
              <BuyStatus>
                <p>{buyStatus}</p>
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
                <p className="rating">{starRating}</p>
                <p className="number">({maxRating}) </p>
                <p className="country"> &#8226; {country}</p>
              </div>
            </Rating>
            <Title>
              <p>{description}</p>
            </Title>
            <Price>
              <p><span>From ${price}</span> / person</p>
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
  cursor: pointer;
`

const PofilePicture=styled.div`
  position:relative;
  z-index: 10;
  width: 177px;
  height: 225px;
  background-color: grey;
  border-radius: 10px;
  display:flex;
  overflow: hidden;

  img {
    position: relative;
    width: 177px;
    object-fit: cover;
  }
`

const Void=styled.div`
  width: 177px;
  height: 18px;
`

const Description=styled.div`
  position:relative;
  bottom:9px;
  width: 177px;
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
