import React from 'react'
import classes from './Cockpit.module.css';

export default function Cockpit(props) {
  let btnClass =  '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  let classes_array = []
  if (props.persons.length <= 2) {
    classes_array.push(classes.red)
  }
  if (props.persons.length <= 1) {
    classes_array.push(classes.bold)
  }
  
  return (
    <div className={classes.Cockpit}>
      <h1> Hi this is react complete guide </h1>
				<p className={classes_array.join(' ')}> From Udemy </p>
				<button 
					className={btnClass}
					// onClick={() => this.switchNameHandler('Preetham')}> 
					onClick={props.togglePerson}>
					Toggle Persons 
				</button>
    </div>
  )
}
