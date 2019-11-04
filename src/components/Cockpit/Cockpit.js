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
      <h1> {props.title} </h1>
				<p className={classes_array.join(' ')}> React Application </p>
				<button 
					className={btnClass}
					// onClick={() => this.switchNameHandler('Preetham')}> 
					onClick={props.togglePerson}>
					Toggle Persons 
				</button>
    </div>
  )
}
