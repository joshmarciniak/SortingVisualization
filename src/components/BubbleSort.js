import React, { Component } from "react"
import Bar from "./Bar"

class BubbleSort extends Component {
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

  swap = async(arr, a, b) => {
    await this.sleep(50);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  bubbleSort = async(arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++){
        let a = arr[j];
        let b = arr[j+1];
        this.changeColor(j, 0);
        this.changeColor(j + 1, 1);
        if (a > b) {
          await this.swap(arr, j, j + 1)
        }
        this.changeColor(j, -1);
        this.changeColor(j + 1, -1);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      this.changeColor(i, 0);
      await this.sleep(50);
    }
    await this.sleep(200);
    for (let i = 0; i < arr.length; i++) {
      this.changeColor(i, -1);
    }
  }

  changeColor = (index, value) => {
    const newIds = this.state.colors.slice();
    newIds[index] = value;
    this.setState({colors: newIds});
  }

  getColor = (val) => {
    var color = "";

    if (this.state.colors[val] === 0){
      color = "purple";
    } else if (this.state.colors[val] === 1){
      color = "green";
    }
    else {
      color = "orange"
    }
    return color;
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
    this.bubbleSort(this.props.sub);
  }


  render() {
    return (
      <div className = "barsContainer">
        {this.draw()}
      </div>
    )
  }
}

export default BubbleSort
