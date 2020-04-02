import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Modi', age:'26'},
      {name: 'Sonia', age:'29'},
      {name: 'Rahul', age:'20'}
    ]
  }

  switchNameHandler = (newName) => {
    console.log('was clicked..!!')
    this.setState({
      persons: [
        {name: newName, age:'26'},
        {name: 'Sonia', age:'29'},
        {name: 'Rahul', age:'20'}
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: "Modi", age:'26'},
        {name: event.target.value, age:'29'},
        {name: 'Rahul', age:'20'}
      ]
    })
  }

  render(){
    const style = {
      backgroungColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload...
          </p>
          <button style = {style} onClick = {() => this.switchNameHandler("Narendra")}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}></Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click = {this.switchNameHandler.bind(this,"Hero")}
            changed = {this.nameChangedHandler}> My hobbies: reading</Person>
          <Person 
            name={this.state.persons[2].name} 
             age={this.state.persons[2].age}></Person>
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
