import React from "react"
import FolderCard from "../utils/folderCard"

const TransformHealthcare = () => {
  return (
    <div className="transform-healthcare">
      <div className="transform-healthcare__title">
        Transforming Healthcare Outcomes <br />
        and Cost Management
      </div>
      <div className="transform-healthcare__wrapper">
        <FolderCard
          title={"$2000"}
          brief={"Decrease in 90-day readmission rates"}
        />

        <FolderCard
          title={"15%"}
          brief={"Reduction in discharges to SNFs & Inpatient Rehab"}
        />

        <FolderCard
          title={"33%"}
          brief={"Reduction in discharges to SNFs & Inpatient Rehab"}
        />

        <FolderCard
          title={"33%"}
          brief={"Reduction in discharges to SNFs & Inpatient Rehab"}
        />
      </div>
    </div>
  )
}

export default TransformHealthcare
