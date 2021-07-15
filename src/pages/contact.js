import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/globals/section/Section"
import Column from "../components/globals/section/Column"
import Contact from "../components/Contact"
import ContactCopy from "../components/ContactCopy"
import Background from "../components/background"
import Footer from "../components/globals/footer/Footer"

const ContactPage = () => {
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
      <Background>
        <Section style={{ height: "100px" }}></Section>
      </Background>
      <Section>
        <Column>
          <Contact />
        </Column>
        <Column>
          <ContactCopy />
        </Column>
      </Section>
      <Section style={{ width: "100vw" }}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.3375448780585!2d-157.86436854842864!3d21.297674685783953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e6e4f0313d3%3A0xb33d7ddde7052627!2sShari%20Saiki%20Design%20Studio%2C%20Inc.%20%2F%20mesh%20home%20decor!5e0!3m2!1sen!2sus!4v1626322010929!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Section>
      <Section style={{ width: "100vw" }}>
        <Footer />
      </Section>
    </Layout>
  )
}

export default ContactPage
