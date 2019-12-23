import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <div>Showing 1 to 10 of 500 entries</div>
      <div className={footerStyles.buttons}>
        <button>Previous</button>
        <button>1</button>
        <button>2</button>
        <button>Next</button>
      </div>
    </footer>
  )
}

export default Footer
