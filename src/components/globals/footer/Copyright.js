import React from "react"
import styled from "styled-components"

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright">
      &copy; Copyright 2020 | 1OMNI
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  text-align: center;
  padding: 2rem 0rem 2rem 0rem;
  font-family: "Bebas Neue";
  font-size: 1rem;
  color: var(--white);
  background: #000000;
  a {
    color: var(--white);
  }
`

export default Copyright
