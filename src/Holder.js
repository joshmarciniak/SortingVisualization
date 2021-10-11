import React, {Component} from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState =>{
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoItems = todosData.map(item => <TodoItem key = {item.id} item = {item}
      handleChange = {this.handleChange}/>)
    return(
      <div>
        {todoItems}
      </div>
    )
  }
}

export default App

import React, {Component} from "react"

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLogged : false
    }

    this.onClickHandler = this.onClickHandler.bind(this)
}
    onClickHandler(){
      this.setState(prevState =>{
        return{
          isLogged: !prevState.isLogged
        }
      })
    }

  render(){
    let buttonText = this.state.isLogged ? "LOG OUT" : "LOG IN"
    return(
      <div>
        <h1>{this.state.isLogged ? "You are currently logged in" : "You are currently logged out"}</h1>
        <button onClick = {this.onClickHandler}>{buttonText}</button>
      </div>
    )
  }
}

export default App

import React, {Component} from "react"

class App extends Component{
  constructor(){
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/l")
    .then(response => response.json())
    .then(data => {
      this.setState({
        character: data
      })
    this.setState({loading:false})
    })
  }

  render(){
    const text = this.state.loading ? "loading..." : this.state.character.name
    return(
      <div>
        <p>{text}</p>
      </div>
    )
  }
}

export default App

import React, { useState } from "react";

function Todo({ todo, index }){
  return(
    <div className ="todo">
      { todo.text }
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit = {handleSubmit}>
      <input
      type = "text"
      className = "input"
      value = {value}
      placeholder = "Add Todo..."
      onChange = {e => setValue(e.target.value)} />
    </form>
  )
}

function Navbar() {
  const[todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: ' Build really cool thing',
      isCompleted:false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  return(
    <div>
      {todos.map((todo, index) => (
        <Todo key = {index} index = {index} todo = {todo} />

      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Navbar;

<ul className = "nav-menu-sort-type">
  <li>
    <button className = "button">Quick Sort</button>
  </li>
  <li>
    <button className = "button">Bubble Sort</button>
  </li>
  <li>
    <button className = "button">Insertion Sort</button>
  </li>
  <li>
    <button className = "button">Selection Sort</button>
  </li>
  <li>
    <button className = "button">Merge Sort</button>
  </li>
  <li>
    <button className = "button">Heap Sort</button>
  </li>
  <li>
    <button className = "button">Radix Sort</button>
  </li>
  <li>
    <button className = "button">Bucket Sort</button>
  </li>
</ul>

import React from "react"
import "./../index.css"

function onChangeHandler(){
  console.log("poop")
}
function TodoItem(props){
  return(
    <div className = "todo-item">
      <input
        type = "checkbox"
        checked = {props.item.completed}
        onChange = {() =>props.handleChange(props.item.id)}
        />
      {props.item.completed ? <p style = {{color: "red", textDecorationLine:"line-through"}}>{props.item.text}</p> :
      <p>{props.item.text}</p>}
    </div>
  )
}

export default TodoItem

display: grid;
grid-template-columns: repeat(2, auto);

display: grid;
grid-template-columns: repeat(2, auto);
grid-gap: 20px;
