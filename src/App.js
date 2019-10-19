import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css';

class App extends Component {
	state = {
		persons:  [
			{ id:'sdadfga', name: 'Max', age: 28 },
			{ id:'ksdfafg', name: 'Sridhar', age: 27 },
			{ id:'tuiario', name: 'Prema', age: 30 }
		],
		otherState: "nothing so far",
		showPersons: false
	}
	
	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons; //mutable assignment
		// const persons = this.state.persons.slice(); //immutable assignment
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({
			persons: persons
		})
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex( p => {
			return p.id === id;
		})
		console.log(personIndex)

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons]
		persons[personIndex] = person;

		this.setState({
			persons: persons
		});

	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	}
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{ this.state.persons.map((person, index) => {
						return (
							<Person 
								click = {this.deletePersonHandler.bind(this, index)}
								name = { person.name }
								age = { person.age }
								key = { person.id }
								changed = { (event) => this.nameChangedHandler(event, person.id) }
							/>
						);
					})}
				</div> 
			)
		}

		return (
			<div className="App">
				<h1>Hello This is Preetham Sridhar</h1>
				<h2>India</h2>
				<button 
					style={style}
					// onClick={() => this.switchNameHandler('Preetham')}> 
					onClick={this.togglePersonsHandler}>
					Toggle Persons 
				</button>
				{persons}
			</div> 
		);
	}
} 

export default App;