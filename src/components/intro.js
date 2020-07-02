import React from "react"
import styled from "styled-components"

const Intro = ({ intro }) => {
  return (
    <IntroWrapper>
      <h3>{intro}</h3>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  width: 80vw;
  margin: 0rem auto 2rem auto;
  padding-top: 4rem;
  display: flex;
  h3 {
    font-size: 4rem;
    color: #000000;
  }
  p {
    font-size: 4rem;
    line-height: 4rem;
    font-family: "Bebas Neue";
    color: black;
  }
`

export default Intro
