import React from "react"
import "./Button.css"
import "./Navbar.css"

function GenClick(props) {
  return(
    <ul className = "nav-menu-gen">
      <li>
        <button
          className = "button"
          onClick = {props.onClick}>
          Generate New Array
        </button>
      </li>
    </ul>
  )
}

export default GenClick
