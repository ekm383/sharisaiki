import React from "react"
import { Helmet } from "react-helmet"

const search = () => {
  return (
    <div>
      <Helmet>
        <script
          async
          src="https://cse.google.com/cse.js?cx=e329ba4ab4f8c91b5"
        ></script>
      </Helmet>
      <div className="gcse-search"></div>
    </div>
  )
}

export default search
