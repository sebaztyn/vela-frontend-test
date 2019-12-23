import React from "react"
import contentStyles from "./contents.module.scss"
import TopSection from "./TopSection"
import Gradient from "../Icons/Gradient.js"
import DropdownArrow from "../Icons/DropdownArrow.js"
import LeftArrowButton from "../Icons/RightButton2.js"
import RightArrowButton from "../Icons/RightButton.js"
import Overview from "./Overview.js"
import Payments from "./Payments"
import Footer from "./Footer"

const Contents = () => {
  return (
    <div className={contentStyles.container}>
      <section className={contentStyles.excerptContainer}>
        <TopSection textOne="Daily Transaction Volume" textTwo="2,342" />
        <TopSection textOne="Daily Transaction Value" textTwo="₦4,000,000" />
        <TopSection textOne="Total Transaction Volume" textTwo="452,000" />
        <TopSection textOne="Total Transaction Value" textTwo="₦4,000,000" />
      </section>
      <section className={contentStyles.gradientContainer}>
        <header>
          <div>Today: 5, Aug 2018</div>
          <ul>
            <li>
              <span>1 Jan - 1 Jun</span>
              <span>
                <DropdownArrow />
              </span>
            </li>
          </ul>
          <div className={contentStyles.arrowButton}>
            <LeftArrowButton />
            <RightArrowButton />
          </div>
        </header>
        <div className={contentStyles.gradientBody}>
          <div>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
          <Gradient className={contentStyles.gradientGraph} />
        </div>
        <Overview
          title="Orders"
          styling={contentStyles.orderContainer}
          pending="Pending Orders"
          figureOne="20"
          figureTwo="80"
          figureThree="100"
          reconcile="Reconciled Orders"
          total="Total Orders"
        />
        <Overview
          title="Payments"
          styling={contentStyles.paymentsContainer}
          figureOne="20"
          figureTwo="80"
          figureThree="100"
          pending="Un-reconciled Payments"
          reconcile="Reconciled Payments"
          total="Total Payments"
        />
      </section>
      <Payments
        containerStyle={contentStyles.listingContainer}
        spinnerStyle={contentStyles.spinned}
      />
      <Footer />
    </div>
  )
}

export default Contents
