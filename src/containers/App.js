import React, { Component } from 'react'
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {

	constructor(props) {
		super(props);
		console.log("[App.js] constructor")
		this.state = {
			persons:  [
				{ id:'sdadfga', name: 'Max', age: 28 },
				{ id:'ksdfafg', name: 'Sridhar', age: 27 },
				{ id:'tuiario', name: 'Prema', age: 30 }
			],
			otherState: "nothing so far",
			showPersons: false,
			showCockpit: true
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		console.log("[App.js] getDerivedStateFromProps", props);
		return state;
	}

	// Only older versions of React support this
	// componentWillMount() {
	// 	console.log("[App.js] componentWillMount")
	// }

	componentDidMount() {
		console.log("[App.js] componentDidMount");
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		 console.log("[App.js] shouldComponentUpdate");
		 return true;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("[App.js] componentDidUpdate");
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
		const personIndex = this.state.persons.findIndex( p => {
			return p.id === id;
		})
		console.log("person id", personIndex)

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
		console.log("[App.js] render");
		let persons = null;
		let cockpit = null;

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
		if (this.state.showCockpit) {
			cockpit = (
				<Cockpit 
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					personsLength={this.state.persons.length}
					togglePerson={this.togglePersonsHandler}
				/>
			)
		}

		return (
			<Aux>
				<button onClick={()=> this.setState({
					showCockpit: false
				})}>Remove Cockpit</button>
				{cockpit}
				{persons}
			</Aux> 
		);
	}
} 

export default withClass(App, styles.App);