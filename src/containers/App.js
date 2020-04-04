import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    if (this.state.showPerson) {
      persons = 
          <Persons 
            persons = {this.state.persons} 
            clicked= {this.deletePersonHandler} 
            changed = {this.nameChangedHandler}>
          </Persons>
      
    }


    return (
      <div>
        <Cockpit
          showPerson = {this.state.showPerson}
          persons = {this.state.persons}
          clicked={this.togglePersonHandler}>
        </Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
