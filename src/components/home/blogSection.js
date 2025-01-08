import { Link } from "gatsby"
import React from "react"

const BlogSection = ({ title, subtitle, children, linkText }) => {
  return (
    <section className="blog-section">
      <h2 className="blog-section__title">{title}</h2>
      <div className="blog-section__wrapper">
        <h3 className="blog-section__subtitle">{subtitle}</h3>
        <Link className="btn">{linkText}</Link>
      </div>
      <div className="blog-section__children">{children}</div>
    </section>
  )
}

export default BlogSection
