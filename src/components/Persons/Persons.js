import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return prevState
  // }
  
  shouldComponentUpdate(nextProps, nextState, nextContext) {
     console.log('[Persons.js] shouldComponentUpdate')
     return true
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log("prevProps: ", prevProps);
    console.log("snapshot: ", snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        // <ErrorBoundary key={person.id}>
          <Person 
            click={() => this.props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id}  // for Virtual DOM to work efficiently
            changedPerson={(event) => this.props.changed(event, person.id)}
          />
        // </ErrorBoundary>
        );
    });
  }
}
 
export default Persons;