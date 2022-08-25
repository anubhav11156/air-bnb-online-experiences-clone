import React from 'react'
import styled from 'styled-components'
import StaticPart from './StaticPart'
import DynamicPart from './DynamicPart'

function Main() {
    return (
        <Container>
          <StaticPart />
          <DynamicPart />
        </Container>
    )
}

export default Main

const Container=styled.div`
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  width: 570px;
  height: 850px;
  border-radius: 16px;
  overflow: hidden;
`
