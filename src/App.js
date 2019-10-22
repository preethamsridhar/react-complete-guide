import React, { Component } from 'react'
import Person from './Person/Person'
import styles from './App.module.css';

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
		let persons = null;
		let btnClass = "";

		if (this.state.showPersons) {
			persons = (
				<div>
					{ this.state.persons.map( (person, index) => {
						return (
							<Person 
								click={this.deletePersonHandler.bind(this, index) }
								name={person.name}
								age={person.age}
								key={person.id}   // for Virtual DOM to work efficiently
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div> 
			)
			btnClass = styles.Red;
		}

		// let classes = ['red', 'bold'].join(" ");
		let classes_array = []
		if (this.state.persons.length <= 2) {
			classes_array.push('red')
		}
		if (this.state.persons.length <= 1) {
			classes_array.push('bold')
		}
		let classes = classes_array.join(" ");

		console.log(classes)

		return (
			<div className={ styles.App }>
				<h1> Hi this is react complete guide </h1>
				<p className={classes}> From Udemy </p>
				<button 
					className={btnClass}
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