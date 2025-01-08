import React from "react"
import Tabs from "../utils/Tabs"

const ExploreCareMeasurement = () => {
  const tabs = [
    { label: "Tab 1", content: <p>This is the content of Tab 1.</p> },
    { label: "Tab 2", content: <p>This is the content of Tab 2.</p> },
    { label: "Tab 3", content: <p>This is the content of Tab 3.</p> },
  ]

  return (
    <div className="explore-caremeasurement">
      <h1 className="explore-caremeasurement__title">
        Explore CareMeasurement
      </h1>
      <p className="explore-caremeasurement__subtitle">
        The Next Generation of Optimizing Costs, Revenue, and Patient Care
      </p>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default ExploreCareMeasurement
