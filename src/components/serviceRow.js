import React from "react"
import styled from "styled-components"
import { FiMail, FiArchive, FiMap } from "react-icons/fi"

const serviceRow = () => {
  return (
    <Wrapper>
      <div className="box">
        <FiMail />
        <p>
          Large inventory of hangtags, polybags, UPC stickers, price tickets and
          more.
        </p>
      </div>
      <div className="box">
        <FiArchive />
        <p>
          Daily picking, packing, tracking, logistics, and customs clearance.
        </p>
      </div>
      <div className="box">
        <FiMap />
        <p>
          Manage returns, fulfilment, processing, freight bill auditing/payment,
          and freight forwarding.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80vw;
  margin: 0rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    flex-basis: 30%;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    color: #ffffff;
    text-align: center;
  }
  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    div {
      flex-basis: 80%;
      margin: 1rem auto;
    }
    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
`

export default serviceRow
