import React, { Component } from "react"
import Bar from "./Bar"

class InsertionSort extends Component {
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
      color = "orange";
    }
    return color;
  }

  changeColor = (index, value) => {
    const newIds = this.state.colors.slice();
    newIds[index] = value;
    this.setState({colors: newIds});
  }

  insertionSort = async(arr) => {
    for (let i = 1; i < arr.length; i++) {
      this.changeColor(i, 0);
      let current = arr[i];

      let j = i - 1;
      while ((j > -1) && (current < arr[j])) {
        this.changeColor(j, 1);
        this.changeColor(j - 1, 1)
        this.changeColor(i, 0);
        await this.sleep(50);
        arr[j+1] = arr[j];


        this.changeColor(j, -1);
        this.changeColor(j - 1, -1);

        j--;
      }
      await this.sleep(50);
      arr[j+1] = current;
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
    this.insertionSort(this.props.sub);
  }

  render() {
    return(
      <div className = "barsContainer">
        {this.draw()}
      </div>
    )
  }
}

export default InsertionSort
