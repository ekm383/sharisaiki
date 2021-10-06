import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

class RightNav extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "Home",
      },
      {
        id: 1,
        path: "/about",
        text: "About",
      },
      {
        id: 2,
        path: "/services",
        text: "Services",
      },
      {
        id: 3,
        path: "/contact",
        text: "Contact",
      },
      {
        id: 4,
        path: "https://meshbysharisaiki.netlify.app/",
        text: "[ MESH ]",
      },
    ],
  }
  render() {
    return (
      <Ul open={this.props.open}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.text}
              </Link>
            </li>
          )
        })}
      </Ul>
    )
  }
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-family: "Helvetica";
  font-weight: lighter;
  font-size: 0.8rem;
  li {
    padding-right: 2.5rem;
    &:nth-child(6) {
      padding-right: 0rem;
    }
    a {
      padding-bottom: 0.4rem;
      text-decoration: none;
      color: var(--white);
      transition: 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        color: var(--gray);
      }
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--mainColor);
    position: fixed;
    text-align: right;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 90%;
    z-index: 9998;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    margin-top: 0;
    li {
      width: 90%;
      font-size: 2rem;
      font-weight: bold;
      padding-top: 1rem;
      padding-right: 1rem;
      a {
        color: #fff;
      }
    }
    .cart {
      margin-right: 2rem;
    }
  }
`

export default RightNav
