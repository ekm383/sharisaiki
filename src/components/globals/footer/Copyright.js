import React from "react"
import styled from "styled-components"

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright">
      &copy; 2021 SHARI SAIKI DESIGN STUDIO
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  text-align: center;
  padding: 2rem 0rem 2rem 0rem;
  font-family: "Roboto";
  font-size: 0.7rem;
  color: var(--white);
  background: #000000;
  a {
    color: var(--white);
  }
`

export default Copyright
