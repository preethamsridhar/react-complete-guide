import React from 'react';
import styles from './Person.module.css';

const Person = (props) => {
		// console.log(props)
	return (
		<div className={styles.Person}>
			<p onClick={ props.click }> I'm a {props.name} and I am {props.age} years old. {props.children} </p>
			<input type="text" onChange={props.changed} value={props.name}></input>
		</div>
	)
}

export default Person;
