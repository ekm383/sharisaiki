import React from "react"
import styled from "styled-components"

const serviceColumn = ({ service, description }) => {
  return (
    <Wrapper>
      <div>
        <h3>{service}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
  h3 {
    font-size: 2rem;
    letter-spacing: 1px;
    color: #000000;
  }
  p {
    line-height: 1.3rem;
  }
`

export default serviceColumn
