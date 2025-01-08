// src/components/Tabs.js
import React, { useState } from "react"

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label) // Set the default active tab

  return (
    <div className="tabs">
      <div className="tab-list">
        {tabs.map(tab => (
          <button
            key={tab.label}
            className={`btn btn--outlined ${
              activeTab === tab.label ? "btn--outlined--active" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map(
          tab =>
            activeTab === tab.label && (
              <div key={tab.label} className="tab-panel">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Tabs
