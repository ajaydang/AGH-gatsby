import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import BannerSection from "../components/home/bannerSection"
import TransformHealthcare from "../components/home/transformHealthcare"
import Testimonial from "../components/home/testimonial"
import BlogSection from "../components/home/blogSection"
import BlogCard from "../components/utils/blogCard"
import TransformData from "../components/home/transformData"

import HersheyMedicalCenter from "../images/hershey-medical-center.jpg"
import PennStateCenter from "../images/client-logo/penn-state-hershey-medical-center.png"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import ExploreCareMeasurement from "../components/home/ExploreCareMeasurement"

import RothmanOrthopedics from "../images/client-logo/rothman-orthopaedics.png"
import PennStateHershey from "../images/client-logo/penn-state-hershey-medical-center.png"
import NewEnglandBaptistLogo from "../images/client-logo/new-england-baptist-logo.png"

const HomePage = () => {
  const testimonials = [
    {
      id: 1,
      logo: RothmanOrthopedics,
    },
    {
      id: 2,
      logo: PennStateHershey,
    },
    {
      id: 3,
      logo: NewEnglandBaptistLogo,
    },
  ]

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <button className="custom-arrow">
        {<StaticImage src="../../images/svgIcon/NextArrow.svg" />}
      </button>
    ),
    prevArrow: (
      <button className="custom-arrow">{/* <PreviousArrow /> */}</button>
    ),
  }

  return (
    <Layout>
      <div className="header-banner">
        <Header />
        <BannerSection />
      </div>

      <div className="clients">
        <div className="clients__title">
          <p>Trusted By the Nation's Top Hospitals and ASCs</p>
        </div>

        <div className="clients__logo-wrapper">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div
                className="clients__logo"
                id={testimonial.id}
                key={testimonial.id}
              >
                <img src={testimonial.logo} alt="" />
                {/* <StaticImage
                  src={testimonial.logo}
                  alt="rothman-orthopaedics"
                  placeholder="blurred"
                  layout="fixed"
                /> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <TransformHealthcare />
      <ExploreCareMeasurement />
      <Testimonial />

      <BlogSection
        title={"Reshaping Healthcare Economics"}
        subtitle={
          "Delivering actionable insights to reduce costs, optimize revenue, and improve outcomes."
        }
        linkText={"Schedule a Demo"}
      >
        <BlogCard
          title={"Improve Surgical Cost Management"}
          description={
            "Implement targeted strategies to reduce expenses and enhance operational efficiency in surgical procedures."
          }
          url={"#"}
        />
        <BlogCard
          title={"Improve Surgical Cost Management"}
          description={
            "Implement targeted strategies to reduce expenses and enhance operational efficiency in surgical procedures."
          }
          url={"#"}
        />
        <BlogCard
          title={"Improve Surgical Cost Management"}
          description={
            "Implement targeted strategies to reduce expenses and enhance operational efficiency in surgical procedures."
          }
          url={"#"}
        />
      </BlogSection>

      <BlogSection
        title={"Real World Results"}
        subtitle={
          "See how top hospitals and ASCs are using Avant-garde Health to drive real, meaningful outcomes."
        }
        linkText={"Read More"}
      >
        <BlogCard
          description={
            "Discover how PennState Health achieved significant cost reductions and improved patient outcomes through targeted vendor negotiations and streamlined patient care processes with Avant-garde Health."
          }
          url={"#"}
          image={HersheyMedicalCenter}
          logoImage={PennStateCenter}
          isResearch
        />
        <BlogCard
          description={
            "Discover how Newton Wellesley Hospital improved performance across supply spending, operating room  efficiency, length of stay, and coding accuracy with Avant-garde Health."
          }
          url={"#"}
          image={HersheyMedicalCenter}
          logoImage={PennStateCenter}
          isResearch
        />
      </BlogSection>

      <TransformData />
    </Layout>
  )
}
export default HomePage
