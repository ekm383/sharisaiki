import React from "react"
import styled from "styled-components"

const Column = ({ id, children, style }) => {
  return (
    <SectionWrapper id={id} style={style}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0rem;
  }
`

export default Column
