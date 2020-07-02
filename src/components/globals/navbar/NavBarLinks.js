import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "#agency",
        text: "Agency Services",
      },
      {
        id: 2,
        path: "#3pl",
        text: "Logistic Services",
      },
      {
        id: 3,
        path: "#contact",
        text: "Contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  background: #3e3e3e;
  li {
    list-style-type: none;
    font-weight: bold;
    text-align: right;
  }
  li:nth-child(1) {
    padding-top: 5rem;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.8rem 1.6rem;
    color: white;
    font-family: "Bebas Neue";
    font-size: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: lightgray;
      color: var(--white);
      padding: 0.8rem 1.5rem;
    }
  }
  height: ${props => (props.open ? "335px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`

export default NavBarLinks
