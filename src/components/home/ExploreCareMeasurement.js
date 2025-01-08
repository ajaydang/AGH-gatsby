import React from "react"
import Tabs from "../utils/Tabs"

import FinancialMargin from "../../images/explore-care/financial-margin.svg"
import BundledPayment from "../../images/explore-care/bundled-payment.svg"
import MaximizeRevenue from "../../images/explore-care/maximize-revenue.svg"
import OptimizeSize from "../../images/explore-care/optimize-site.svg"
import PatientThroughput from "../../images/explore-care/patient-throughput.svg"
import SpeedTime from "../../images/explore-care/speed-time.svg"

const ExploreCareMeasurement = () => {
  const tabs = [
    {
      label: "Improve Financial Margins",
      icon: "../../images/svgIcon/financial-margin.svg",
      content: (
        <div className="tabs__item-wrapper">
          <div className="tabs__item-image">
            <img src={FinancialMargin} alt="" />
          </div>
          <div className="tabs__item-information">
            <h3 className="tabs__item-headings">
              Reduce unnecessary expenses and drive cost efficiency across
              procedures
            </h3>
            <p className="tabs__item-brief">
              Benchmark supply costs, renegotiate vendor contracts, and reduce
              waste while safeguarding care quality.
            </p>
            <hr className="line" />
            <ul>
              <li className="tabs__item-list">
                Reduce supply costs by up to{" "}
                <span className="text-green">20%</span>.
                <p className="text-underline text-italic tabs__item-text">
                  Discover how one hospital achieved $5.8 million through
                  targeted cost optimization.
                </p>
                <a href="#" className="tabs__item-link">
                  Learn More{" "}
                  <span>
                    <img src="../images/svgIcon/arrow.svg" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "Improve Patient Throughput",
      icon: "../../images/svgIcon/patient-throughput.svg",
      content: (
        <div className="tabs__item-wrapper">
          <div className="tabs__item-image">
            <img src={PatientThroughput} alt="" />
          </div>
          <div className="tabs__item-information">
            <h3 className="tabs__item-headings">
              Improve overall efficiency across surgical care to increase
              patient throughput.
            </h3>
            <p className="tabs__item-brief">
              Address bottlenecks in preoperative, intraoperative, and
              postoperative workflows to optimize patient flow.
            </p>
            <hr className="line" />
            <ul>
              <li className="tabs__item-list">
                Increase patient{" "}
                <span className="text-green">throughput by 10-15%</span> without
                adding resources.
                <p className="text-underline text-italic tabs__item-text">
                  Learn how one hospital improved workflow efficiency to treat
                  more patients annually.
                </p>
                <a href="#" className="tabs__item-link">
                  Learn More{" "}
                  <span>
                    <img src="../images/svgIcon/arrow.svg" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "Optimize Site of Care",
      icon: "../../images/svgIcon/optimize-site.svg",
      content: (
        <div className="tabs__item-wrapper">
          <div className="tabs__item-image">
            <img src={OptimizeSize} alt="" />
          </div>
          <div className="tabs__item-information">
            <h3 className="tabs__item-headings">
              Improve margins and efficiency by placing cases in the right
              setting
            </h3>
            <p className="tabs__item-brief">
              Analyze costs to allocate procedures strategically between
              inpatient, outpatient, and ASC settings.
            </p>
            <hr className="line" />
            <a href="#" className="tabs__item-link">
              Learn More{" "}
              <span>
                <img src="../images/svgIcon/arrow.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
      ),
    },
    {
      label: "Maximize Revenue",
      icon: "../../images/svgIcon/maximize-revenue.svg",
      content: (
        <div className="tabs__item-wrapper">
          <div className="tabs__item-image">
            <img src={MaximizeRevenue} alt="" />
          </div>
          <div className="tabs__item-information">
            <h3 className="tabs__item-headings">
              Eliminate revenue leakage and ensure accurate reimbursement.
            </h3>
            <p className="tabs__item-brief">
              Ensure coding accuracy to capture full reimbursements, maintain
              compliance, and recover lost revenue opportunities.
            </p>
            <hr className="line" />
            <ul>
              <li className="tabs__item-list">
                Recover{" "}
                <span className="text-green">
                  $750K - $1.25 million annually
                </span>{" "}
                in missed reimbursements.
                <p className="text-underline text-italic tabs__item-text">
                  See how one system optimized procedural coding to improve
                  revenue performance.
                </p>
                <a href="#" className="tabs__item-link">
                  Learn More{" "}
                  <span>
                    <img src="../images/svgIcon/arrow.svg" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "Succeed in Bundled Payments",
      icon: "../../images/svgIcon/bundled-payment.svg",
      content: (
        <div className="tabs__item-wrapper">
          <div className="tabs__item-image">
            <img src={BundledPayment} alt="" />
          </div>
          <div className="tabs__item-information">
            <h3 className="tabs__item-headings">
              Maximize profitability in bundled payment programs like TEAM or
              BPCI.
            </h3>
            <p className="tabs__item-brief">
              Optimize care delivery, control costs, and align teams to meet
              performance benchmarks.
            </p>
            <hr className="line" />
            <ul>
              <li className="tabs__item-list">
                One health system{" "}
                <span className="text-green">
                  reduced costs by 15% below CMS targets
                </span>{" "}
                while decreasing 90-day mortality rates from 34% to 25% and
                90-day readmission rates from 30% to 25%, even with increased
                patient acuity.
                <a href="#" className="tabs__item-link">
                  Learn More{" "}
                  <span>
                    <img src="../images/svgIcon/arrow.svg" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "Speed Time to Action",
      icon: "../../images/svgIcon/speed-time.svg",
      content: (
        <div className="tabs__item-wrapper">
          <div className="tabs__item-image">
            <img src={SpeedTime} alt="" />
          </div>
          <div className="tabs__item-information">
            <h3 className="tabs__item-headings">
              Empower quick, informed decisions for better outcomes.
            </h3>
            <p className="tabs__item-brief">
              Deliver real-time insights into costs, workflows, and performance
              metrics across surgical care.
            </p>
            <hr className="line" />
            <ul>
              <li className="tabs__item-list">
                Optimize decision-making{" "}
                <span className="text-green">
                  across 100% of surgical cases
                </span>
                . Leaders used real-time data to improve resource allocation and
                outcomes.
                <a href="#" className="tabs__item-link">
                  Learn More{" "}
                  <span>
                    <img src="../images/svgIcon/arrow.svg" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="explore-caremeasurement">
      <h1 className="explore-caremeasurement__title">
        Explore CareMeasurement
      </h1>
      <p className="explore-caremeasurement__subtitle">
        The Next Generation of Optimizing Costs, Revenue, and Patient Care
      </p>
      <div className="explore-caremeasurement__content">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default ExploreCareMeasurement
