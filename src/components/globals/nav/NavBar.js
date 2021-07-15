import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Burger from "./Burger"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "shari-saiki-design-Logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Nav>
      <div className="box" key={data.logo}>
        <Link to="/">
          <Img
            className="logo"
            fluid={data.logo.childImageSharp.fluid}
            alt="logo"
          />
        </Link>
      </div>
      <Burger />
    </Nav>
  )
}

const Nav = styled.nav`
  margin: 0rem auto;
  padding: 1rem;
  background: var(--darkGray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .box {
    width: 200px;
  }
  @media (max-width: 768px) {
    margin: 0rem auto;
    .box {
      width: 150px;
    }
  }
`

export default NavBar
