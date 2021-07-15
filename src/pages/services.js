import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/globals/section/Section"
import Column from "../components/globals/section/Column"
import Intro from "../components/intro"
import StyledServices from "../components/services"
import Background from "../components/background"
import CTA from "../components/CTA"
import Footer from "../components/globals/footer/Footer"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      lamp: file(relativePath: { eq: "lamp.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Services SSDS"
        description="Full Service Agency Offering Production, Design, & Marketing`,
      author: `@meshsharisaiki"
        keywords={[
          `Interior Design`,
          `Commercial Interior Design`,
          `Residential Interior Design`,
          `Interior Design and Consulting`,
        ]}
      />
      <Section id="agency" style={{ width: "100vw" }}>
        <Background>
          <Intro intro="INTERIOR DESIGN SERVICES" />
        </Background>
        <Section style={{ paddingBottom: "3rem" }}>
          <Column>
            <p style={{ lineHeight: "1.7rem", marginBottom: "2rem" }}>
              Interior Design is a discipline, a craft, and profession that are
              measured by transforming creative thought into tangible reality.
              Interior designers are individuals that have committed themselves
              to a life of formal education, industry standards and servitude on
              behalf of their valued clients. This is the discipline and focus
              of Shari Saiki Design studio. Established in 1998, Shari Saiki
              continues to pioneer and transform Hawaii's interior landscape
            </p>
          </Column>
          <Column>
            <Img fluid={data.lamp.childImageSharp.fluid} alt="shari" />
          </Column>
        </Section>
      </Section>
      <StyledServices />
      <Section style={{ width: "100vw" }}>
        <Background>
          <CTA
            copy="
        We specialize in both small and large-scale projects ranging from
        urban/condominium living, single-family dwellings, and multifamily
        residences to luxury estate properties.
      "
          />
        </Background>
      </Section>
      <Section style={{ width: "100vw" }}>
        <Footer />
      </Section>
    </Layout>
  )
}

export default Services
