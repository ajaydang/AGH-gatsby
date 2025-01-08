import classNames from "classnames"
import { Link } from "gatsby"
import React from "react"

const BlogCard = ({
  title,
  description,
  image,
  url,
  isResearch = false,
  logoImage,
}) => {
  const blogClass = classNames({
    "blog-card": true,
    "blog-card--research": isResearch,
  })
  return (
    <div className={blogClass}>
      {image && (
        <div className="blog-card__image">
          {logoImage && <img src={logoImage} className="blog-card__logo" />}
          <img src={image} alt="Blog" className="blog-card__main" />
        </div>
      )}

      <div className="blog-card__title">{title}</div>
      <div className="blog-card__description">{description}</div>

      {url && <Link to={url}>Learn More</Link>}
    </div>
  )
}

export default BlogCard
