import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css';

class App extends Component {
	state = {
		persons:  [
			{ name: 'Max', age: 28 },
			{ name: 'Sridhar', age: 27 },
			{ name: 'Prema', age: 30 }
		],
		otherState: "nothing so far"
	}
	
	switchNameHandler = (newName) => {
		console.log("switch name button pressed!");
		this.setState(
			{
				persons: [
					{ name: newName, age: 10 },
					{ name: 'Sridhar', age: 27 },
					{ name: 'Prema', age: 30 }	
				]
			}
		)
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: "Max", age: 10 },
				{ name: event.target.value, age: 27 },
				{ name: 'Stephanie', age: 30 }
			]
		})
	}
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}
		return (
			<div className="App">
				<h1>Hello This is Preetham Sridhar</h1>
				<h2>India</h2>
				<button 
					style={style}
					onClick={() => this.switchNameHandler('Preetham')}> 
					Switch Name 
				</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
				<Person 
					name={this.state.persons[1].name}  
					click={() => this.switchNameHandler('Preethu!')}  
					age={this.state.persons[1].age}
					changed= {this.nameChangedHandler}
					> 
					My hobbies 
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
				<p>{this.state.otherState}</p>
			</div> 
		);
	}
} 

export default App;