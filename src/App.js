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
	state = {
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
	}
	
	switchNameHandler = () => {
		console.log("switch name button pressed!");
		this.setState(
			{
				persons: [
					{
						name: 'Preetham',
						age: 10
					},
					{
						name: 'Sridhar',
						age: 27
					},
					{
						name: 'Prema',
						age: 30
					}	
				]
			}
		)
	}
	render() {
		return (
			<div className="App">
				<h1>Hello This is Preetham Sridhar</h1>
				<button onClick={this.switchNameHandler}> Switch Name </button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies </Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
				<p>{this.state.otherState}</p>
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
 