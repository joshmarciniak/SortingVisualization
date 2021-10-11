import React, { Component } from "react"
import Bar from "./Bar"

class SelectionSort extends Component {
  constructor(props) {
    super(props);
    var len = props.sub.length;
    this.state = {
      colors: Array(len).fill(-1)
    }
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  getColor = (val) => {
    var color = "";

    if (this.state.colors[val] === 0){
      color = "green";
    } else if (this.state.colors[val] === 1) {
      color = "purple";
    } else {
      color  = "orange";
    }
    return color;
  }

  changeColor = (index, value) => {
    const newIds = this.state.colors.slice();
    newIds[index] = value;
    this.setState({colors: newIds});
  }

  swap = async(arr, a, b) => {
    await this.sleep(25);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  selectionSort = async(arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
      let min = i;

      for(let j = i + 1; j < arr.length; j++) {
        this.changeColor(j, 1);
        this.changeColor(i, 0);
        await this.sleep(25);
        if (arr[j] < arr[min]) {
          min = j;
        }
      this.changeColor(j, -1)
      }
      await this.sleep(25);
      if (min != i) {
        this.swap(arr, i, min);
      }
      this.changeColor(i, -1);
    }

    for (let i = 0; i < arr.length; i++) {
      this.changeColor(i, 1);
      await this.sleep(50);
    }
    await this.sleep(200);
    for (let i = 0; i < arr.length; i++) {
      this.changeColor(i, -1);
    }
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

  componentDidMount() {
    this.selectionSort(this.props.sub);
  }

  render() {
    return(
      <div className = "barsContainer">
        {this.draw()}
      </div>
    )
  }
}

export default SelectionSort
