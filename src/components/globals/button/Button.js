import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  /* width: 10rem; */
  display: block;
  margin: 2rem auto;
  color: white;
  background: var(--mainColor);
  border: 2px solid var(--mainColor);
  border-radius: 10px;
  cursor: pointer;
  padding: 1rem 4rem;
  font-family: "Roboto";
  font-size: 1.2rem;
  letter-spacing: 4px;
  transition: all 0.2s linear;
  &:hover {
    background: transparent;
    border: 2px solid var(--mainColor);
    color: var(--mainColor);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin: 1.5rem auto 0rem auto;
  }
`

export default Button
