import React from 'react';

const Person = (props) => {
    console.log(props)
    return <p> I'm a {props.name} and I am {props.age} years old. </p>
}

export default Person;
