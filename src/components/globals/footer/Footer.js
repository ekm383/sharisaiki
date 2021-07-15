import React, { Component } from "react"
import styled from "styled-components"
import Section from "../section/Section"
import { Link } from "gatsby"

class Footer extends Component {
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
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <Section>
          <div className="box">
            <h4>SHOWROOM & OFFICE</h4>
            <p>
              677 Ala Moana Blvd Suite #108
              <br />
              Honolulu, Hawaii 96813
            </p>
            <p className="phone">
              Tel: 808.536.4044 (Design Studio) <br />
              Tel: 808.536.6374 (Mesh Retail)
            </p>
          </div>
          <div className="box">
            <h4>HOURS</h4>
            <p>
              Monday - Saturday: 10:00am - 6:00pm <br /> Sunday: Closed
            </p>
          </div>
          <div className="box box-right">
            {this.state.links.map(item => (
              <Link
                to={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </Link>
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
  background: var(--gray);
  color: var(--white);
  h4 {
    font-size: 0.7rem;
    margin-bottom: 1rem;
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
    margin-top: 1rem;
  }
  .box {
    flex-basis: 30%;
  }
  .box-right {
    display: flex;
    justify-content: flex-end;
  }
  a {
    color: var(--white);
    font-size: 0.7rem;
    margin-right: 1rem;
    text-decoration: none;
    font-weight: 700;
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
