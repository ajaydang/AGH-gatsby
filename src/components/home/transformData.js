import React from "react"
import BioImage from "../../images/insights_biologics.png"

const TransformData = () => {
  return (
    <div className="transform-data">
      <div className="transform-data__wrapper">
        <h2 className="transform-data__title">
          Transform Data into Actionable Insights
        </h2>
        <p>
          Turn complex data into simple, actionable steps that lead to better
          outcomes and increased savings.
        </p>

        <a href="#" className="btn">
          Schedule a Demo
        </a>
      </div>
      <div className="transform-data__image">
        <img src={BioImage} alt="" />
      </div>
    </div>
  )
}

export default TransformData
