// import React from 'react';
import React, { Component } from 'react'
import Person from './Person/Person'
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
// 		<div className="App">
// 			<h1>Hello this is Preetham Sridhar</h1>
// 		</div>
//   );
// }
class App extends Component {
	render(){
		return (
			<div className="App">
				<h1>Hello this is Preetham Sridhar</h1>
				<h2>India</h2>
				<Person name="Preetham" age="25"/>
				<Person name="Aditya" age="27"> My hobbies </Person>
				<Person name="Greesh" age="30"/>
			</div>
		);
		// return React.createElement('div', 
		// 	{
		// 		className: 'App'
		// 	}, 
		// 	React.createElement('h1', null, 'I\'m a React App !!!')
		// );
	}
} 

export default App;
 