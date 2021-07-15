import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/globals/section/Section"
import Column from "../components/globals/section/Column"
import Intro from "../components/intro"
import Background from "../components/background"
import CTA from "../components/CTA"
import Footer from "../components/globals/footer/Footer"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "shari-saiki-about.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bio: file(relativePath: { eq: "shari-saiki-bio.jpeg" }) {
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
        title="About SSDS"
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
          <Intro intro="WHAT MAKES US DIFFERENT:" />
        </Background>
        <Section style={{ paddingBottom: "3rem" }}>
          <Column>
            <p style={{ lineHeight: "1.7rem", marginBottom: "2rem" }}>
              Established in 1998 and based in Honolulu, Hawaii, we believe and
              live by an island proverb of “big city small town”. It translates
              to a philosophy that you are closely connected to your community
              and accountable for your deeds.
            </p>
            <p style={{ lineHeight: "1.7rem", marginBottom: "2rem" }}>
              For Shari Saiki Design Studio, it is our nature to forge lasting
              relationships and loyal bonds with each and every client. Always
              listening, always educating, always creating and always producing
              impeccably designed spaces, places, and environments … on time, on
              scope, on budget.
            </p>
            <p style={{ lineHeight: "1.7rem", marginBottom: "2rem" }}>
              Our process is precise, interpersonal and transparent. We are
              designer, project manager, adviser, translator, personal shopper,
              expediter, tradesman, craftsman, upholstery, manufacturer,
              Delivery Company, moving crew and installer. We are Shari Saiki
              Design Studio.
            </p>
          </Column>
          <Column>
            <Img fluid={data.about.childImageSharp.fluid} alt="shari" />
          </Column>
        </Section>
      </Section>
      <Background>
        <Section style={{ height: "100px" }}></Section>
      </Background>
      <Section style={{ paddingBottom: "3rem" }}>
        <Column>
          <Img fluid={data.bio.childImageSharp.fluid} alt="shari" />
        </Column>
        <Column>
          <h3 style={{ marginBottom: "2rem" }}>SHARI SAIKI</h3>
          <p style={{ lineHeight: "1.7rem", marginBottom: "2rem" }}>
            Shari studied architecture at the University of Hawaii at Manoa. She
            soon found her passion was interior design and spent a decade under
            the tutelage of Mark Masuoka, one of Hawaii’s leading designers of
            the time. Shari became the founder and principal designer of Shari
            Saiki Design Studio specializing in residential, residential
            development and hospitality design.
          </p>
          <p style={{ lineHeight: "1.7rem", marginBottom: "2rem" }}>
            Through the years, provocative projects and inspiring clients have
            provided a rich tapestry through which her designs have been
            interwoven. She prides herself in creating beautiful, successful
            projects based upon cohesive relationships developed with her
            clients, contractors, and other resource vendors. To enhance and
            broaden her design she includes travel to domestic and international
            locations as well as biannual attendance at international furniture
            markets.
          </p>
          <p style={{ lineHeight: "1.7rem", marginBottom: "2rem" }}>
            In 2005, Shari and her husband Bryan Kitashimacreated MESH by Shari
            Saiki, a home furnishings store in Honolulu. MESH provides fresh,
            bold and artful furniture with a quick-ship approach to customized
            shopping.
          </p>
        </Column>
      </Section>
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

export default About
