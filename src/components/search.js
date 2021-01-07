import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const search = () => {
  return (
    <SearchWrapper>
      <Helmet>
        <script
          async
          src="https://cse.google.com/cse.js?cx=e329ba4ab4f8c91b5"
        ></script>
      </Helmet>
      <div className="gcse-search"></div>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  .gsc-control-cse .gsc-control-cse-en {
    background-color: none !important;
  }
`

export default search
