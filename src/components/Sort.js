import React, { Component } from "react"
import Bars from "./Bars"
import Quicksort from "./Quicksort"
import BubbleSort from "./BubbleSort"
import InsertionSort from "./InsertionSort"
import SelectionSort from "./SelectionSort"


class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
        if (this.props.sort === "Quicksort"){
          if (this.props.clicked === true){
            return (
                <Quicksort val = {this.props.val} barSize = {this.props.barSize} margin = {this.props.margin} sub = {this.props.sub}/>
              );
            }
          } else if (this.props.sort === "Bubblesort"){
            if (this.props.clicked === true){
              return(
                <BubbleSort val = {this.props.val} barSize = {this.props.barSize} margin = {this.props.margin} sub = {this.props.sub}/>
              );
            }
          } else if (this.props.sort === "Insertionsort"){
            if (this.props.clicked === true){
              return(
                <InsertionSort val = {this.props.val} barSize = {this.props.barSize} margin = {this.props.margin} sub = {this.props.sub}/>
              );
            }
          } else if (this.props.sort === "Selectionsort") {
            if (this.props.clicked === true) {
              return(
                <SelectionSort val = {this.props.val} barSize = {this.props.barSize} margin = {this.props.margin} sub = {this.props.sub}/>
              );
            }
          }
        return(
          <Bars
            val = {this.props.val}
            barSize = {this.props.barSize}
            margin = {this.props.margin}
            sub = {this.props.sub}
            color = "orange"
          />
        );
      }
  }

export default Sort
