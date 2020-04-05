import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClasss from '../hoc/withClasss'
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


import classes from './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    console.log("app js constructor");
  }

  state = {
    persons: [
      { name: 'Modi', age: '26', id: 'hfih84' },
      { name: 'Sonia', age: '29', id: 'josj723' },
      { name: 'Rahul', age: '20', id: 'fawxn5489' }
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false

  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id);

    // const person = Object.assign({},this.state.persons[personIndex]) ES5 way
    const person = { ...this.state.persons[personIndex] }; // ES6
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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

  loginHandler = ()=>{
    console.log("==========qqqqqqqqq")
    this.setState({authenticated: true})
  }

  render() {

    console.log("render")
    let persons = null;
    if (this.state.showPerson) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}>
        </Persons>

    }


    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value = {{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPerson={this.state.showPerson}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}>
            </Cockpit>
          ) : null}

          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClasss(App, classes.App);
