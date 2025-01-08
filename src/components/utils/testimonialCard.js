import React from "react"

const TestimonialCard = ({
  id,
  description,
  profileName,
  profileDesignation,
}) => {
  return (
    <div className="testimonial-card" id={id}>
      <div className="testimonial-card__qoute">
        <svg
          width="30"
          height="26"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.9375C0 11.0156 0.664062 7.5 1.99219 5.39062C3.39844 3.20312 5.58594 1.40625 8.55469 0L11.9531 4.57031C9.53125 5.89844 7.96875 7.14844 7.26562 8.32031C6.64062 9.41406 6.32812 11.0938 6.32812 13.3594H12.4219V25.8984H0V15.9375ZM16.9922 15.9375C16.9922 11.0156 17.6562 7.5 18.9844 5.39062C20.3906 3.20312 22.5391 1.40625 25.4297 0L28.8281 4.57031C26.4062 5.89844 24.8438 7.14844 24.1406 8.32031C23.5156 9.41406 23.2031 11.0938 23.2031 13.3594H29.2969V25.8984H16.9922V15.9375Z"
            fill="#E3F97B"
          />
        </svg>
      </div>
      <div className="testimonial-card__wrapper">
        <div className="testimonial-card__description">{description}</div>
        <div className="testimonial-card__profile">
          <div className="testimonial-card__profile-image"></div>
          <div className="testimonial-card__profile-content">
            <h3>{profileName}</h3>
            <p>{profileDesignation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
