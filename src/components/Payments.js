import React, { useRef, useState, useEffect } from "react"
import DropdownArrowBlue from "../Icons/DropdownArrowBlue.js"
import SearchSVG from "../Icons/Search.js"
import ListItems from "./ListItems.js"
import ListTable from "./ListTable.js"
// import paymentStyles from "./payments.module.scss"

const Payments = ({ containerStyle, spinnerStyle }) => {
  const spanOneRef = useRef()
  const spanTwoRef = useRef()
  const svgRef = useRef()
  const listItemRef = useRef()
  const [isOpen, toggleOpen] = useState(false)
  const [showText, setText] = useState("All")

  const handleOpenList = event => {
    if (
      event.target === spanOneRef.current ||
      event.target === spanTwoRef.current ||
      event.target === svgRef.current
    ) {
      return toggleOpen(prevState => !prevState)
    } else {
      setText(event.target.textContent)
      return toggleOpen(false)
    }
  }
  return (
    <section className={containerStyle}>
      <div>Payments</div>
      <div>
        <span>Showing</span>
        <span>
          20 <DropdownArrowBlue />
        </span>
        <span>out of 500 payments</span>
        <span>
          <SearchSVG />
          <input type="text" placeholder="Search payments" />
        </span>
        <span>Show</span>
        <div onClick={handleOpenList}>
          <div>
            <span ref={spanOneRef}>{showText}</span>
            <span ref={spanTwoRef}>
              <DropdownArrowBlue
                svgreference={svgRef}
                className={!isOpen ? spinnerStyle : ""}
              />
            </span>
          </div>
          {isOpen && <ListItems listref={listItemRef} />}
        </div>
      </div>
      <ListTable />
    </section>
  )
}

export default Payments
