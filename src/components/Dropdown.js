import React from "react"
import "./Dropdown.css"
import "./Navbar.css"

function Dropdown(props) {
  return(
    <ul className = "nav-menu-sort-type">
      <li>
        <label className = "slider-label">Sort Type: </label>
      </li>
      <li className = "custom-select">
        <select
        name = "sort-type"
        onChange = {props.onSelect}
        defaultValue = "default"
        >
          <option disabled value = "default"> -- select an option -- </option>
          <option value = "Quicksort">Quick Sort</option>
          <option value = "Bubblesort">Bubble Sort</option>
          <option value = "Insertionsort">Insertion Sort</option>
          <option value = "Selectionsort">Selection Sort</option>
        </select>
        <span className = "custom-arrow"></span>
      </li>
    </ul>
  )
}

export default Dropdown
