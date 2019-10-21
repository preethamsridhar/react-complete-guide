import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
		// console.log(props)
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	}
	return (
		<div style={style} className="Person">
			<p onClick={ props.click }> I'm a {props.name} and I am {props.age} years old. {props.children} </p>
			<input type="text" onChange={props.changed} value={props.name}></input>
		</div>
	)
}

export default Radium(Person);
