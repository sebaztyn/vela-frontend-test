import React from "react"
import "../styles/index.scss"
import Header from "./Header"
import Navbar from "./Navbar"
import Contents from "./Contents"
import layoutStyle from "./layout.module.scss"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.container}>
      <Header />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
