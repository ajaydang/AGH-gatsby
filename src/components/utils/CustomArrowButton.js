import React from "react"

const CustomArrowButton = ({ onClick, buttonIcon }) => {
  return (
    <button className="custom-arrow" onClick={onClick}>
      {buttonIcon}
    </button>
  )
}

export default CustomArrowButton
