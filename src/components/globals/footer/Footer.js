import React, { Component } from "react"
import styled from "styled-components"
import Section from "../section/Section"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <Section>
          <div className="box">
            <h4>Contact:</h4>
            <p>
              2334 S King St,
              <br />
              Honolulu, HI 96826
            </p>
            <p className="phone">(808) 955-5080</p>
            <p>Open Daily 10:30am - 9:00pm</p>
          </div>
          <div className="box">
            <h4>About Us:</h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took.
            </p>
          </div>
          <div className="box">
            <h4>Follow Us:</h4>
            {this.state.icons.map(item => (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Section>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  width: 100vw;
  padding: 5rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  background: var(--darkGray);
  color: var(--white);
  h4 {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  .nav {
    display: flex;
    nav {
      margin-right: 1rem;
    }
  }
  p,
  .phone {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }
  .box {
    flex-basis: 30%;
  }
  a {
    color: var(--white);
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    padding: 1rem 0rem 3rem 0rem;
    .box {
      flex-basis: 40%;
      margin-top: 2rem;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
