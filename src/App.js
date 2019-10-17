// import React from 'react';
import React,  {useState } from 'react'
import Person from './Person/Person'
// import logo from './logo.svg';
import './App.css';

const App = props => {
	const [ personState, setPersonsState ] = useState({
		persons:  [
			{	
				name: 'Max',
				age: 28
			},
			{
				name: 'Sridhar',
				age: 27
			},
			{
				name: 'Prema',
				age: 30
			}
		],
		otherState: "nothing so far"  
	});	

	switchNameHandler = () => {
		console.log("switch name button pressed!");
		setPersonsState(
			{
				persons: [
					{ name: 'Preetham', age: 10 },
					{	name: 'Sridhar', age: 29 },
					{ name: 'Prema', age: 30 }	
				]
			}
		)
	}
	return (
		<div className="App">
			<h1>Hello This is Preetham Sridhar</h1>
			<button onClick={setPersonsState}> Switch Name </button>
			<Person name={personState.persons[0].name} age={personState.persons[0].age}/>
			<Person name={personState.persons[1].name} age={personState.persons[1].age}> My hobbies </Person>
			<Person name={personState.persons[2].name} age={personState.persons[2].age}/>
			<p>{personState.otherState}</p>
		</div>
	);
}

export default App;