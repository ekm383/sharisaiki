import React from "react"
import styled from "styled-components"

const ContactCopy = () => {
  return (
    <StyledContact>
      <div className="contact-container">
        <div>
          <h3>SHOWROOM & OFFICE</h3>
          <p>
            677 Ala Moana Blvd Suite #108 Honolulu, Hawaii 96813
            <br />
            <br /> Tel: 808.536.4044 (Design Studio) <br />
            Tel: 808.536.6374 (Mesh Retail)
          </p>
          <h3>BUSINESS AND OPERATIONS</h3>
          <p>
            <strong>Bryan Dean Kitashima</strong> <br /> Vice President/C.O.O.{" "}
            <br /> bryan@sharisaiki.com <br />
            808.536.4044 ext. 4
          </p>
          <h3>ACCOUNTING/BILLING</h3>
          <p>
            <strong>Kris Saiki</strong> <br /> ksaiki@sharisaiki.com <br />
            808.536.4044 ext. 5
          </p>
        </div>
        <div>
          <h3>INTERIOR DESIGNERS</h3>
          <p>
            <strong>Shari Saiki Kitashima</strong> <br /> President/Principal
            Designer <br />
            shari@sharisaiki.com <br />
            808.536.4044 ext. 1
          </p>
          <br />
          <p>
            <strong>Stephanie Schlink </strong> <br /> Sr. Interior Designer{" "}
            <br />
            stephanie@sharisaiki.com <br /> 808.536.4044 ext. 2
          </p>
        </div>
      </div>
    </StyledContact>
  )
}

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .contact-container {
    display: flex;
  }
  div {
    margin: 0 10px;
  }
  h3 {
    color: var(--mainColor);
    font-size: 1rem;
    margin: 1rem 0;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 2rem;
    .contact-container {
      display: block;
    }
    div {
      flex-basis: 90%;
      margin: 0;
    }
  }
`

export default ContactCopy
