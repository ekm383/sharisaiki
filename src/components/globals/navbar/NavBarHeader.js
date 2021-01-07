import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import logo from "../../../images/1omni-logo.png"

const NavBarHeader = ({ handleNavBar }) => {
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="logo" width="60" />
        </Link>
        <FaBars
          className="toggle-icon"
          onClick={() => {
            handleNavBar()
          }}
        />
      </HeaderWrapper>
    </>
  )
}

const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  width: 95vw;
  padding: 1.5rem;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`

export default NavBarHeader
