import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from '../Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Modi', age: '26', id: 'hfih84' },
      { name: 'Sonia', age: '29', id: 'josj723' },
      { name: 'Rahul', age: '20', id: 'fawxn5489' }
    ],
    showPerson: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id);

    // const person = Object.assign({},this.state.persons[personIndex]) ES5 way
    const person = { ...this.state.persons[personIndex] }; // ES6
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons: persons
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


    let persons = null;
    let btnClass = ''
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
          })}
        </div>
      )
      btnClass = classes.red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <p className={assignedClasses.join(' ')}>
            Edit <code>src/App.js</code> and save to reload...
          </p>
          <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Person</button>

          {persons}
          <a
            className={classes.AppLink}
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
