import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  /* width: 10rem; */
  display: block;
  margin-top: 2rem;
  color: white;
  background: #d8b87b;
  border: 1px solid #d8b87b;
  border-radius: 50px;
  cursor: pointer;
  padding: 1rem 2rem;
  font-family: "Open Sans";
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.2s linear;
  &:hover {
    background: transparent;
    border: 1px solid var(--white);
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin: 1.5rem auto 0rem auto;
  }
`

export default Button
