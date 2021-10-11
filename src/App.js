import React, {Component} from "react"
import "./App.css"
import "./components/Navbar.css"
import "./components/Button.css"
import Sort from"./components/Sort"
import Slider from "./components/Slider"
import GenClick from "./components/GenClick"
import Dropdown from "./components/Dropdown"
import SortButton from "./components/SortButton"

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 50,
      heights: Array.from({length: 200}, () => Math.floor(Math.random() * 385)  + 15),
      heightsSub: [],
      barSize: 120,
      barMargin: 7,
      sortType: "default",
      sortButtonVisible: "none",
      clicked: false,
    }

    this.handleGenClick = this.handleGenClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  componentDidMount(){
   window.addEventListener('load', this.setState({heightsSub: this.state.heights.slice(0, this.state.value)}));
   window.addEventListener('load', this.setSize(this.state.value));
   this.setState({clicked: false});
 }

 setSize = (val) => {
      if(val <= 4) {
        this.setState({barSize: 120});
        this.setState({barMargin: 7});
      }
      else if(val > 4 && val <= 10){
       this.setState({barSize: 120 - (val * 4)});
       this.setState({barMargin: 7});
     } else if (val > 10 && val <= 30){
       this.setState({barSize: 80 - (val * 2)});
       this.setState({barMargin: 4});
     } else if (val > 40 && val <= 50){
       this.setState({barSize: 16});
       this.setState({barMargin: 3});
     }else if (val > 50 && val <= 70) {
       this.setState({barSize: 12});
       this.setState({barMargin: 2});
     } else if (val > 70 && val <= 100){
       this.setState({barSize: 9});
       this.setState({barMargin: 1});
     }
   }

  handleSlider = (e) => {
    if (this.state.value < 4){
      this.setState({value: 4});
    }
    else {
      this.setState({value: e.target.value})
    }

    if(this.state.value < 4){
      this.setState({heightsSub: this.state.heights.slice(0, 4)});
      this.setSize(this.state.value);
    }
    else {
      this.setState({heightsSub: this.state.heights.slice(0, this.state.value)})
      this.setSize(this.state.value);
      }
    }

    handleGenClick = (e) => {
      let newArray = Array.from({length: 200}, () => Math.floor(Math.random() * 385) + 15);
      this.setState({heights: newArray});
      if (this.state.value <= 4) {
        this.setState({heightsSub: newArray.slice(0, 4)});
      } else {
        this.setState({heightsSub: newArray.slice(0, this.state.value)});
      }

    }

    handleSelection = (e) => {
      this.setState({sortType: e.target.value});
      this.setState({sortButtonVisible: "inline"})
    }

    handleSortClick = (e) => {
        this.setState({clicked: true});
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevState.clicked){
        let curr = false;
        this.setState({clicked: curr});
      }
    }

  render() {
    return(
        <div>
          <nav className = "NavbarItems">
            <GenClick onClick = {(e)=>this.handleGenClick(e)} />
            <Slider value = {this.state.value} onChange = {this.handleSlider} />
            <Dropdown onSelect = {this.handleSelection} />
            <SortButton onClick = {this.handleSortClick} sortButtonVisible = {this.state.sortButtonVisible} />
          </nav>
          <div className = "container">
            <Sort val = {this.state.value} barSize = {this.state.barSize} margin = {this.state.barMargin} sub = {this.state.heightsSub} sort = {this.state.sortType} clicked = {this.state.clicked} />
          </div>
        </div>
      )
    }
}

export default App;
