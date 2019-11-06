import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return prevState
  // }
  
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //    console.log('%c[Persons.js] shouldComponentUpdate', 'font-weight: bold; background-color: yellow;')
  //    console.log("nextProps: ", nextProps.persons)
  //    console.log('this.props: ', this.props.persons)
  //    if (
  //      nextProps.persons !== this.props.persons ||
  //      nextProps.clicked !== this.props.clicked ||
  //      nextProps.changed !== this.props.changed
  //      ) {
  //      return true;
  //    }
  //    else {
  //      return false;
  //    }
  // }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log("prevProps: ", prevProps);
    console.log("snapshot: ", snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
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