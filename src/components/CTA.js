import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "../components/globals/button/Button"

const CTA = ({ copy }) => {
  return (
    <CTAWrapper>
      <h3>{copy}</h3>
      <Button>
        <Link className="cta-button" to="/contact">
          CONTACT
        </Link>
      </Button>
    </CTAWrapper>
  )
}

const CTAWrapper = styled.div`
  width: 80vw;
  margin: 0rem auto 0rem auto;
  padding: 9rem 0rem;
  display: flex;
  flex-wrap: wrap;
  h3 {
    font-size: 1.2rem;
    line-height: 1.9rem;
    color: var(--mainColor);
    width: 50%;
  }
  .cta-button {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    h3 {
      margin-bottom: 2rem;
      width: 100%;
      font-size: 1.2rem;
    }
  }
`

export default CTA
