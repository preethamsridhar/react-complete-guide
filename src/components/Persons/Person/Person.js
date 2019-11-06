import React, {Component} from 'react';
import styles from './Person.module.css';
// import Aux from '../../../hoc/Aux';

class Person extends Component {
	// const rand_number = Math.random();
	// if (rand_number < 0.7) {
	// 	throw new Error('Something went wrong');
	// }
	componentWillUnmount() {
		console.log("[Person.js] componentWillUnmount");
	}
	render(){
		console.log('[Person.js] render');
		return (
			// <div className={styles.Person}>
			<React.Fragment>
				<p> I'm a {this.props.name} and I am {this.props.age} years old. {this.props.children} </p>
				<input type="text" onChange={this.props.changedPerson} value={this.props.name}></input>
				<button className={styles.deleteClass} onClick={this.props.click}> Delete </button>
			</React.Fragment>
			// </div>
		)
	}
}

export default Person;
