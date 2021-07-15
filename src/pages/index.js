import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import Column from "../components/globals/section/Column"
import Intro from "../components/intro"
import Button from "../components/globals/button/Button"
import Background from "../components/background"
import ServiceColumn from "../components/serviceColumn"
import ServiceRow from "../components/serviceRow"
import CTA from "../components/CTA"
import Footer from "../components/globals/footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Full Service Agency Offering Production, Design, & Marketing`,
      author: `@meshsharisaiki"
      keywords={[
        `Interior Design`,
        `Commercial Interior Design`,
        `Residential Interior Design`,
        `Interior Design and Consulting`,
      ]}
    />
    <HeaderIndex>
      <div
        style={{
          width: "250px",
          height: "auto",
          float: "right",
          paddingTop: "60px",
        }}
      ></div>
      <Section>
        <Banner
          subtitle="It is the hallmark of Shari Saiki Design Studio to be intuitive designers, passionate
          innovators, and fervent implementers that create spaces, places, and environments
          composed of Artistry, Tempo, Luxury, Livability, and Legacy."
        >
          <Link to="/contact">
            <Button
              style={{
                marginLeft: "2rem",
                background: "var(--darkGray)",
                border: "var(--darkGray)",
                fontSize: "1rem",
              }}
            >
              CONTACT
            </Button>
          </Link>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="agency" style={{ width: "100vw" }}>
      <Background>
        <Intro
          intro="PROVIDING THE FOUNDATION
          FOR A LIFE LIVED IN PURSUIT OF:"
        />
      </Background>
      <Section style={{ paddingBottom: "3rem" }}>
        <Column>
          <ServiceColumn
            service="CREATION"
            description="We are seekers and educators. We don’t travel to get away; we
            travel to absorb lessons that we did not realize we needed. We seek the
            education of culture, flavors, history, invention, and architecture to create
            unique environments."
          />
          <ServiceColumn
            service="CONTRAST"
            description="Our strategic yet passionate approach to combining inventive
            design, economies of scale and the affordability of impeccable products
            that are tangibly different."
          />
        </Column>
        <Column>
          <ServiceColumn
            service="CURATION"
            description="What objects one chooses to inhabit that personal space
            becomes a direct reflection of one’s own unique story."
          />
          <ServiceColumn
            service="CONTINUITY"
            description="Achieving the purity of design by manipulating a given
            situation in which something happens or exists without stopping or
            changing. Simply put ... a connected whole."
          />
        </Column>
      </Section>
    </Section>
    <Section
      id="3pl"
      style={{
        width: "99vw",
      }}
    >
      <ServiceRow />
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

export default IndexPage
