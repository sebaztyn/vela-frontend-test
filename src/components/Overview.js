import React from "react"
import contentStyles from "./contents.module.scss"

const Overview = props => {
  const {
    title,
    total,
    pending,
    reconcile,
    styling,
    figureOne,
    figureTwo,
    figureThree,
  } = props
  return (
    <div className={styling}>
      <span>{title}</span>
      <progress value="80" max="100"></progress>
      <span>
        {pending}:{" "}
        <span style={{ color: "#FDC203", fontWeight: "bold" }}>
          {figureOne}
        </span>
      </span>
      <span>
        {reconcile}:{" "}
        <span style={{ color: "#27AE60", fontWeight: "bold" }}>
          {figureTwo}
        </span>
      </span>
      <span>
        {total}:{" "}
        <span style={{ color: "blue", fontWeight: "bold" }}>{figureThree}</span>
      </span>
    </div>
  )
}

export default Overview
