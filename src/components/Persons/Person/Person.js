import React, {Component} from 'react';
import styles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

import PropTypes from 'prop-types';

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
			<Aux>
				<p> I'm a {this.props.name} and I am {this.props.age} years old. {this.props.children} </p>
				<input type="text" onChange={this.props.changedPerson} value={this.props.name}></input>
				<button className={styles.deleteClass} onClick={this.props.click}> Delete </button>
			</Aux>
			// </div>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, styles.Person);
