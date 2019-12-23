import React from "react"
import listTableStyles from "./list-table.module.scss"
import dataStore from "../datastore.js"
import DropdownArrow from "../Icons/DropdownArrow.js"
import LeftArrowButton from "../Icons/Object1.js"

const eachListItem = dataStore.map(item => {
  return (
    <div className={listTableStyles.listItem} key={item.id}>
      <span>
        <span>VW</span>
        {item.itemType}
      </span>
      <span>{item.price}</span>
      <span>{item.transactionNo}</span>
      <span>{item.time}</span>
      <span>
        <span>
          <span
            style={
              item.status === "reconciled"
                ? { backgroundColor: "#27AE60" }
                : item.status === "pending"
                ? { backgroundColor: "#EBC315" }
                : { backgroundColor: "#C4C4C4" }
            }
          ></span>
          <span
            style={
              item.status === "reconciled"
                ? { color: "#27AE60" }
                : item.status === "pending"
                ? { color: "#EBC315" }
                : { color: "#C4C4C4" }
            }
          >
            {item.status}
          </span>
        </span>
        <span>
          {<LeftArrowButton className={listTableStyles.dropdownArrow} />}
        </span>
      </span>
    </div>
  )
})

const listTable = () => {
  return (
    <div className={listTableStyles.listContainer}>
      <header className={listTableStyles.listHeader}>
        <div>Item Type</div>
        <div>Price</div>
        <div>Transaction No</div>
        <div>Time</div>
        <div>Status</div>
      </header>{" "}
      <div className={listTableStyles.listBody}>{eachListItem}</div>
    </div>
  )
}

export default listTable
