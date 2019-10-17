import React from 'react';

const Person = (props) => {
    console.log(props)
    return (
        <div>
            <p onClick={ props.click }> I'm a {props.name} and I am {props.age} years old. {props.children} </p>
        </div>
    )
}

export default Person;
