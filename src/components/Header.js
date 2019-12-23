import React from "react"
import headerStyles from "./header.module.scss"
import Search from "../assets/images/Search.png"
import profileImage from "../assets/images/IMG-20180413-WA0005.png"
import VectorOne from "../Icons/Vector1.js"
import VectorTwo from "../Icons/Vector2.js"
import VectorThree from "../Icons/Vector3.js"

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoName}>TransMonitor</div>
      <img src={Search} className={headerStyles.searchIcon} />
      <input
        type="text"
        placeholder="Search..."
        className={headerStyles.searchField}
      />
      <div className={headerStyles.supportText}>Support</div>
      <div className={headerStyles.faqText}>FAQ</div>
      <div className={headerStyles.svgContainer}>
        <VectorOne className={headerStyles.svgOne} />
        <VectorThree className={headerStyles.svgThree} />
        <VectorTwo className={headerStyles.svgTwo} />
      </div>

      <div className={headerStyles.notificationNumber}>8</div>
      <div className={headerStyles.usernameContainer}>
        <p>Hello</p>
        <p>Oluwaleke Ojo</p>
      </div>
      <div className={headerStyles.profileContainer}>
        <img src={profileImage} className={headerStyles.profileImage} />
      </div>
    </header>
  )
}

export default Header
