import React from "react"
import styled from "styled-components"

const services = () => {
  return (
    <StyledServices>
      <div>
        <h3>RESIDENTIAL INTERIOR SERVICES</h3>
        <p>
          We specialize in both small and large-scale projects ranging from
          urban/ condominium living, single-family dwellings, and multifamily
          residences to luxury estate properties.
        </p>
        <p>
          Utilizing an extensive network of manufacturers, suppliers,
          contractors, and craftsman we are able to leverage and supply our
          client projects with impeccable home furnishings, unique accessories,
          artwork, lighting, flooring and creative surfaces.
        </p>
        <ul>
          <li>Interior Design development</li>
          <li>Consultation and Conceptual design</li>
          <li>Furniture and Accessory Procurement</li>
          <li>Space Planning and CAD</li>
          <li>Project Coordination and Management</li>
          <li>Lighting Design</li>
          <li>Flooring Solutions</li>
          <li>Custom Design Furnishings</li>
          <li>Custom Cabinetry</li>
          <li>Custom Window Treatments</li>
          <li>Wall Covering Solutions</li>
          <li>Custom Painting and Murals</li>
        </ul>
      </div>
      <div>
        <h3>COMMERCIAL INTERIOR SERVICES</h3>
        <p>
          For the past 2 decades, Shari Saiki’s iconic influence for interiors
          and original design is well represented for the various projects
          within the Commercial, Development and Hospitality sectors. Companies
          to note include the Sheraton Hotels, Castle and Cooke Homes Hawaii, DR
          Horton, Stanford Carr, Howard Hughes Corporation to name a few.
        </p>
        <p>
          Design Studio’s Commercial division is a full-service interior design
          firm focusing on "concept to completion" interior design. This
          includes consultation, master plan development for both renovations
          and new construction projects. Services also include product design
          and manufacturing, FF&E, and project management.
        </p>
        <ul>
          <li>Model Homes Design and Staging</li>
          <li>Multi-Family Residential Development</li>
          <li>Sales Office Design, Conceptual</li>
          <li>Commercial Space Design and Consultation</li>
          <li>Furnishing Procurement</li>
          <li>Specification, Procurement and Installation</li>
          <li>Private Office Design and Furnishings Procurement</li>
        </ul>
      </div>
    </StyledServices>
  )
}

const StyledServices = styled.div`
  width: 100vw;
  padding: 6rem 0rem;
  background: var(--secondaryColor);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--darkGray);
  div {
    flex-basis: 40%;
    margin: 0 1rem;
  }
  h3 {
    margin: 1rem 0;
  }
  p {
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  ul {
    margin-left: 1rem;
  }
  li {
    margin-bottom: 5px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    div {
      flex-basis: 70%;
    }
  }
`

export default services
