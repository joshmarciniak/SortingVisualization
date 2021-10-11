import React from "react"
import "./Slider.css"
import "./Navbar.css"

function Slider(props) {
  return(
    <ul className = "nav-menu-slider">
      <li>
        <label className = "slider-label">Add/Remove Bars</label>
      </li>
      <li>
        <input
          type = "range"
          min = {0}
          max = {100}
          value = {props.value}
          className = "slider"
          onChange = {props.onChange}
        />
      </li>
    </ul>
  )
}

export default Slider
