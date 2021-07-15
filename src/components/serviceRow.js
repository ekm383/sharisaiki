import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ServiceRow = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImg: file(relativePath: { eq: "shari-saiki-img-01.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      servicesImg: file(relativePath: { eq: "shari-saiki-img-02.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meshImg: file(relativePath: { eq: "shari-saiki-img-03.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div className="item item-1">
        <Img fluid={data.aboutImg.childImageSharp.fluid} />
        <Link fade to="/about">
          <p className="info">[ About ]</p>
        </Link>
      </div>
      <div className="item item-2">
        <Img fluid={data.servicesImg.childImageSharp.fluid} />
        <Link fade to="/services">
          <p className="info">[ Services ]</p>
        </Link>
      </div>
      <div className="item item-3">
        <Img fluid={data.meshImg.childImageSharp.fluid} />
        <Link fade to="/mesh">
          <p className="info">[ Mesh ]</p>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0rem auto;
  .item {
    position: relative;
    width: 33%;
    .info {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      font-size: 1.5rem;
      letter-spacing: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.5rem 1.5rem;
      color: var(--white);
      transition: 150ms ease-in-out;
      &:hover {
        cursor: pointer;
        color: var(--mainColor);
      }
    }
  }
  @media (max-width: 768px) {
    .item {
      width: 95%;
      margin: 5px auto;
      .info {
        padding: 0.7rem 1.7rem;
        font-size: 1.2rem;
      }
    }
  }
`

export default ServiceRow
