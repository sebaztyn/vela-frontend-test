import React from "react"
import contentStyles from "./contents.module.scss"
import Vector4 from "../Icons/Vector4.js"
import Vector5 from "../Icons/Vector5.js"

const TopSection = ({ textOne, textTwo }) => {
  return (
    <div className={contentStyles.excerptItem}>
      <ul>
        <li>{textOne}</li>
        <li>{textTwo}</li>
      </ul>
      <Vector5 className={contentStyles.graphOne} />
      <Vector4 className={contentStyles.graphTwo} />
    </div>
  )
}

export default TopSection
