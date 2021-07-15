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
  margin: 0rem auto 0rem auto;
  padding-top: 8rem;
  display: flex;
  h3 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: var(--mainColor);
    width: 50%;
  }
  p {
    font-size: 2rem;
    line-height: 4rem;
    font-family: "Roboto";
    color: black;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`

export default Intro
