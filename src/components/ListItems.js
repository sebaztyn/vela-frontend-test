import React from "react"

function ListItems({ listref }) {
  return (
    <ul ref={listref}>
      <li>All</li>
      <li>Reconciled</li>
      <li>Un-reconciled</li>
      <li>Settled</li>
      <li>Unsettled</li>
    </ul>
  )
}

export default ListItems
