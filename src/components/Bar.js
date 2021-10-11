import React from "react"
import "./Bars.css"

function Bar(props) {
    if (props.val <= 4) {
      return (
        <div
          className = "bar-element"
          style = {{
            height: 2 * props.height + "px",
            width: props.width + "px",
            marginRight: props.margin + "px",
            background: props.color,
            fontSize: 30
          }}
        >
          {props.height}
        </div>
      )
    }
    else if (props.val > 4 && props.val <= 30) {
      return (
        <div
          className = "bar-element"
          style = {{
            height: 2 * props.height + "px",
            width: props.width + "px",
            marginRight: props.margin + "px",
            background: props.color,
            fontSize: 30 - props.val
          }}
        >
          {props.height}
        </div>
      )
    } else {
        return (
          <div
            className = "bar-element"
            style = {{
              height: 2 * props.height + "px",
              width: props.width + "px",
              marginRight: props.margin + "px",
              background: props.color,
              fontSize: 40 - props.val
            }}
          >
          </div>
        )
    }
}

export default Bar
