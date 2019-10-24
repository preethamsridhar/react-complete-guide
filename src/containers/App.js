import React, { Component } from 'react'
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
		console.log("id used", id);
		console.log("person dict", this.state.persons);
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
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons 
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}
					/>
				</div> 
			)
		}

		return (
			<div className={ styles.App }>
				<Cockpit 
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					togglePerson={this.togglePersonsHandler}
				/>
				{persons}
			</div> 
		);
	}
} 

export default App;