import React from "react"
import "./Navbar.css"
import "./Button.css"

function SortButton(props) {
  return(
    <ul className = "nav-menu-sort-button">
      <li>
        <button className = "button" onClick = {props.onClick} style = {{display: props.sortButtonVisible }}>Sort!</button>
      </li>
    </ul>
  )
}

export default SortButton
