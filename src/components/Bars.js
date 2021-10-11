import React from "react"
import Bar from "./Bar"
import "./Bars.css"

function Bars(props) {
  return(
    <div className = "barsContainer">
      {props.sub.map((height, i) => {
        return(
            < Bar
                val = {props.val}
                height = {height}
                key = {i}
                width = {props.barSize}
                margin = {props.margin}
                color = {props.color}
            />
          )
      }
      )}
    </div>
  )
}

export default Bars
