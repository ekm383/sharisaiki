import React from "react"
import styled from "styled-components"

const serviceColumn = ({ service, description }) => {
  return (
    <Wrapper>
      <div>
        <h3>[ {service} ]</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: var(--mainColor);
  }
  p {
    line-height: 1.5rem;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }
`

export default serviceColumn
