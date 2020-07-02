import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import Column from "../components/globals/section/Column"
import Intro from "../components/intro"
import { FaArrowCircleRight } from "react-icons/fa"
import Background from "../components/background"
import ServiceColumn from "../components/serviceColumn"
import Gallery from "../components/gallery"
import ServiceRow from "../components/serviceRow"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Full Service Agency Offering Production, Design, & Marketing`,
      author: `@1omni"
      keywords={[
        `Apparel Design`,
        `Apparel Marketing`,
        `Full Service Agency`,
        `Apparel Production`,
      ]}
    />
    <HeaderIndex>
      <Section style={{ height: "70vh", width: "100vw", alignItems: "center" }}>
        <Banner
          title="EVERYTHING YOU NEED FOR YOUR BRAND"
          subtitle="Stored Goods | Distribution | Fulfillment | ECommerce | Production"
        >
          <AniLink fade to="#contact">
            <Button>
              START HERE <FaArrowCircleRight />
            </Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="agency" style={{ width: "100vw" }}>
      <Background>
        <Intro
          intro="FULL SERVICE AGENCY OFFERING
PRODUCTION, DESIGN, & MARKETING"
        />
      </Background>
      <Section style={{ padding: "4rem 0rem" }}>
        <Column>
          <ServiceColumn
            service="Marketing"
            description="We are capable of writing comprehensive business plans for investors, banks, and partners. Along with the administrative side of the business, we also offer product and lifestyle photoshoots. All shoots have the option for post-production and mastering."
          />
          <ServiceColumn
            service="Website Management"
            description="Development, graphic design, retouching, sample development, lab dip, trim, fit approvals, and CAD drawings are some of the elements we can execute for online distribution."
          />
          <ServiceColumn
            service="Product Development"
            description="Sourcing fabrics, trims, and factories are some of the most time consuming and research intensive. With our factory relationships around the world, we can speed up the production process since we consider ourselves a fully integrated apparel Manufacturer."
          />
        </Column>
        <Column>
          <Gallery />
        </Column>
      </Section>
    </Section>
    <Section
      id="3pl"
      style={{ width: "100vw", padding: "4rem 0rem", backgroundColor: "black" }}
    >
      <ServiceRow />
    </Section>
    <Section style={{ width: "100vw" }}>
      <Background>
        <Intro intro="THIRD PARTY LOGISTICS SERVICES" />
      </Background>
      <Section style={{ padding: "4rem 0rem" }}>
        <Column>
          <ServiceColumn
            service="LOGISTICS KNOWLEDGE"
            description="1OMNI’s logistics knowledge allows our customers to feel confident in our inbound transportation, freight forwarder management, customs brokerage, delivery, and outbound transportation."
          />
          <ServiceColumn
            service="WAREHOUSE MANAGEMENT"
            description="Our warehouse is staffed to focus on your business and inventory management, inventory auditing,
            customer service, email and phone call log."
          />
        </Column>
        <Column>
          <ServiceColumn
            service="FULL SERVICE 3PL"
            description="1OMNI is a full service managed factory tracking production, QC, shipment preparation, receiving,
            and separate & sorting."
          />
          <ServiceColumn
            service="DIGITAL MARKETING & ADMINISTRATION"
            description="Don’t forget to ask us about our digital marketing and administrative services like social media content management, social posting, photo uploads, back-end ops, accounting, and bookkeeping."
          />
        </Column>
      </Section>
    </Section>
    <Section
      id="contact"
      style={{
        width: "100vw",
        padding: "2rem 0rem",
        backgroundColor: "#f1f1f1",
      }}
    >
      <h3 style={{ fontSize: "4rem", color: "#000000", margin: "2rem auto" }}>
        Let's Talk
      </h3>
      <Contact />
      <p
        style={{
          width: "80vw",
          textAlign: "center",
          margin: "0rem auto",
          color: "black",
          fontFamily: "Bebas Neue",
          fontSize: "1.2rem",
        }}
      >
        <strong>Phone: </strong> (310) 123-4567 | <strong>Email: </strong>
        info@1omni.com | <strong>Address: </strong> 2023 Chico Ave South El
        Monte, CA. 91733
      </p>
    </Section>
    <Section style={{ width: "100vw" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6625501214494!2d-118.06315674871676!3d34.05252628051081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d08b45f60f19%3A0xe4554a8e6a7d56f9!2s2023%20Chico%20Ave%2C%20South%20El%20Monte%2C%20CA%2091733!5e0!3m2!1sen!2sus!4v1593653845479!5m2!1sen!2sus"
        width="100%"
        height="400"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </Section>
  </Layout>
)

export default IndexPage
