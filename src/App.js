import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Modi', age: '26' },
      { name: 'Sonia', age: '29' },
      { name: 'Rahul', age: '20' }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    console.log('was clicked..!!')
    this.setState({
      persons: [
        { name: newName, age: '26' },
        { name: 'Sonia', age: '29' },
        { name: 'Rahul', age: '20' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Modi", age: '26' },
        { name: event.target.value, age: '29' },
        { name: 'Rahul', age: '20' }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice(); ES5 syntax
    const persons = [...this.state.persons] // ES6
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroungColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}></Person>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload...
          </p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
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
