import React from "react"
import TestimonialCard from "../utils/testimonialCard"
import Slider from "react-slick"
import { ReactComponent as NextArrow } from "../../images/svgIcon/NextArrow.svg"
import { ReactComponent as PreviousArrow } from "../../images/svgIcon/PreviousArrow.svg"
import { StaticImage } from "gatsby-plugin-image"

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The data analytics have been tremendous for us by providing a better understanding of our actual costs.",
      author: "JCharles Davis, MD, PhD",
      designation:
        "Chief of Arthroplasty, Penn State Health Milton S. Hershey Medical Center",
    },
    {
      id: 2,
      quote:
        "We have been working with Avant-garde since 2016 and there is no other company like them that I have seen with their ability to robustly examine our care delivery and identify how we can continue to do better in a way that resonates with our surgeons. Their attention to detail, and commitment to squeezing every bit of healthcare value is incomparable.",
      author: "Steven F. Schutzer, M.D.",
      designation:
        "Physician Executive, Orthopedic Service Line, Trinity Health Of New England Physician Director, Connecticut Joint Replacement Institute at Saint Francis",
    },
    {
      id: 3,
      quote:
        "We have been working with Avant-garde since 2016 and there is no other company like them that I have seen with their ability to robustly examine our care delivery and identify how we can continue to do better in a way that resonates with our surgeons. Their attention to detail, and commitment to squeezing every bit of healthcare value is incomparable.",
      author: "Steven F. Schutzer, M.D.",
      designation:
        "Physician Executive, Orthopedic Service Line, Trinity Health Of New England Physician Director, Connecticut Joint Replacement Institute at Saint Francis",
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
    <div className="testimonial">
      <div className="testimonial__wrapper">
        <div className="testimonial__title"> What Our Clients Are Saying</div>
        <div className="testimonial__arrow"></div>
      </div>
      <div className="testimonial__cards">
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              id={testimonial.id}
              description={testimonial.quote}
              profileName={testimonial.author}
              profileDesignation={testimonial.designation}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
