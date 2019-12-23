import React from "react"
import navbarStyles from "./navbar.module.scss"
import IconOne from "../Icons/NavGroup"
import IconTwo from "../Icons/NavGroup1"
import IconThree from "../Icons/NavGroup2"
import IconFour from "../Icons/NavGroup3"
import IconFive from "../Icons/NavGroup72"
import IconSix from "../Icons/NavVector"
import IconSeven from "../Icons/NavWallet43"
import IconEight from "../Icons/NavWallet431"
import IconNine from "../Icons/NavWallet432"

function Navbar() {
  return (
    <nav className={navbarStyles.navContainer}>
      <div className={navbarStyles.invoiceButton}>
        <span>GENERATE INVOICE</span>
      </div>
      <ul className={navbarStyles.navList}>
        <div>main</div>
        <li>
          <IconSix className={navbarStyles.svgIcon} />
          Overview
        </li>
      </ul>
      <ul className={navbarStyles.navList}>
        <div>Payments</div>
        <li>
          <IconSeven className={navbarStyles.svgIcon} />
          All Payments
        </li>
        <li>
          <IconEight className={navbarStyles.svgIcon} />
          Reconciled Payments
        </li>
        <li>
          <IconNine className={navbarStyles.svgIcon} />
          Un - Reconciled Payments
        </li>
        <li>
          <IconOne className={navbarStyles.svgIcon} />
          Manual Settlement
        </li>
      </ul>
      <ul className={navbarStyles.navList}>
        <div>Orders</div>
        <li>
          <IconTwo className={navbarStyles.svgIcon} />
          All Orders
        </li>
        <li>
          <IconThree className={navbarStyles.svgIcon} />
          Pending Orders
        </li>
        <li>
          <IconFive className={navbarStyles.svgIcon} />
          Reconciled Orders
        </li>
        <li>
          <IconFour className={navbarStyles.svgIcon} />
          Merchant Profile
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
