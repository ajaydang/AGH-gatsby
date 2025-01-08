import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const BannerSection = () => {
  return (
    <>
      <div className="banner-section">
        <div className="banner-section__heading">
          <div className="banner-section__title">
            <h1>Optimize healthcare operation</h1>
            <h1 className="text-lora">for data driven accountability</h1>
          </div>
          <p className="banner-section__brief">
            Avant-Garde Health provides advanced software for detailed analysis
            of department and procedure data, including supply costs, personnel
            expenses, and payer reimbursement.
          </p>
          <div className="banner-section__buttons">
            <button className="btn btn-primary">Schedule a Demo</button>
            <button className="btn btn-primary">Watch Video</button>
          </div>
        </div>

        <div className="banner-section__image">
          <img src="" alt="" />
        </div>
      </div>
    </>
  )
}

export default BannerSection
