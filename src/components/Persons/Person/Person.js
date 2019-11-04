import React from 'react';
import styles from './Person.module.css';

const Person = (props) => {
	// const rand_number = Math.random();
	// if (rand_number < 0.7) {
	// 	throw new Error('Something went wrong');
	// }
	return (
		<div className={styles.Person}>
			<p> I'm a {props.name} and I am {props.age} years old. {props.children} </p>
			<input type="text" onChange={props.changedPerson} value={props.name}></input>
			<button className={styles.deleteClass} onClick={props.click}> Delete </button>
		</div>
	)
}

export default Person;
