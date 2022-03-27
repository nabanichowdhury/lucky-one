import React from 'react';
import "./Answer.css";

const Answer = () => {
    return (
        <div className='answer'>
            <h1>How react Works?</h1>
            <p>React is a Java script library.We can use java-script and HTML at the same time and in react and it makes the program very efficient.This is called JSX.By using this we can make our program dynamic very easily.React is having many hooks.By creating many components we can make our code easy .</p>
            <h1>Difference between props and state?</h1>
            <p>Props are read only and props cannot be changed.State can change asynchronously.We can pass props in parent component.</p>
        </div>
    );
};

export default Answer;