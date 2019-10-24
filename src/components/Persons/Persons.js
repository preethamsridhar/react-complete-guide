import React from 'react';
import Person from './Person/Person'


const Persons = (props) => props.persons.map((person, index) => {
  return (
    // <ErrorBoundary key={person.id}>
      <Person 
        click={() => props.clicked(index)}
        name={person.name} 
        age={person.age}
        key={person.id}
        // key={person.id}   // for Virtual DOM to work efficiently
        changedPerson={(event) => props.changed(event, person.id)}
      />
    // </ErrorBoundary>
  );
});
 
export default Persons;