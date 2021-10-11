import React, { Component } from "react"
import Bar from "./Bar"

  class Quicksort extends Component{
    constructor(props){
      super(props)
      var len = props.sub.length;
      this.state = {
        colors: Array(len).fill(-1),
      };
    }

    draw = () => {
      return(
          this.props.sub.map((height, i) => {
            return(
                < Bar
                    val = {this.props.val}
                    height = {height}
                    key = {i}
                    width = {this.props.barSize}
                    margin = {this.props.margin}
                    color = {this.getColor(i)}
                />
              )
          }
        )
      )
    }

    changeColor = (index, value) => {
      const newIds = this.state.colors.slice();
      newIds[index] = value;
      this.setState({colors: newIds});
    }

    quickSort = async(arr, start, end) => {
      if (start >= end) {
        return;
      }
      let index = await this.partition(arr, start, end);
      this.changeColor(index, -1)

      await Promise.all([
        this.quickSort(arr, start, index - 1),
        this.quickSort(arr, index + 1, end)
      ]);
  }

    partition = async(arr, start, end) => {
      for (let i = start; i < end; i++) {
        this.changeColor(i, 1);
      }

      let pivotValue = arr[end];
      let pivotIndex = start;
      this.changeColor(pivotIndex, 0);

      for (let i = start; i < end; i++) {
        if(arr[i] < pivotValue) {
          await this.swap(arr, i, pivotIndex);
          this.changeColor(pivotIndex, -1);
          pivotIndex++;
          this.changeColor(pivotIndex, 0);
        }
      }
      await this.swap(arr, pivotIndex, end);

      for (let i = start; i < end; i++) {
        if (i !== pivotIndex) {
          this.changeColor(i, -1);
        }
      }
      return pivotIndex;
    }

    sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    swap = async(arr, a, b) => {
      await this.sleep(50);
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }

    getColor = (val) => {
      var color = "";

      if (this.state.colors[val] === 0){
        color = "green";
      } else if (this.state.colors[val] === 1) {
        color = "purple";
      } else {
        color = "orange";
      }
      return color;
    }

    componentDidMount() {
      this.quickSort(this.props.sub, 0, this.props.sub.length - 1);
    }

    render(){
      return(
        <div className = "barsContainer">
          {this.draw()}
        </div>
      )
    }
  }

  export default Quicksort
