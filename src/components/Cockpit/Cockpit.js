import React from 'react';
import classes from './Cockpit.css'
import logo from '../../containers/logo.svg';


const cockpit = (props) => {
    const assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.red;
    }

    return (
        <div className={classes.Cockpit}>
            <header className=''>
                <img src={logo} className={classes.AppLogo} alt="logo" />
                <p className={assignedClasses.join(' ')}>
                    Edit <code>src/App.js</code> and save to reload...
                </p>
                <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
            </header>
        </div>
    )
}

export default cockpit;