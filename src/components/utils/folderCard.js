import React from "react"

const FolderCard = ({ title, brief }) => {
  return (
    <div className="folder-card">
      <div className="folder-card__title">{title}</div>
      <div className="folder-card__brief">{brief}</div>
    </div>
  )
}

export default FolderCard
