import React from "react"
import styled from "styled-components"

const Banner = ({ style, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 100%;
  height: 60vh;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: var(--white);
  .box {
    flex-basis: 80%;
    text-align: left;
  }
  img {
    width: 50%;
  }
  .subtitle {
    font-size: 1.3rem;
    line-height: 2rem;
    text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    margin-left: 2rem;
    border-left: 2px solid #ffffff;
    padding-left: 2rem;
  }
  @media (max-height: 900px) {
    height: 90vh;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    height: 50vh;
    justify-content: flex-start;
    .box {
      flex-basis: 100%;
      text-align: center;
      padding: 3rem 0rem 3rem 0rem;
    }
    img {
      width: 60%;
    }
    .subtitle {
      margin: 0;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5rem;
      text-align: left;
    }
  }
`

export default Banner
