import React from 'react'
import styled from 'styled-components'
import Cards from './cards'
import {data} from '../cardData'

function DynamicPart() {
  // console.log(data);
  const cards = data.map( item => {
    return (
      <Cards
        backgroundImg={item.coverImg}
        starRating={item.stats.rating}
        country={item.country}
        price={item.price}
        maxRating={item.stats.reviewCount}
        description={item.title}
        buyStatus={item.buyStatus}
      />
    )
  })
    return (
        <Container>
          {cards}
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
  overflow: scroll;
`
