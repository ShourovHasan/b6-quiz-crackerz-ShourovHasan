import React from 'react';
// import { Form } from 'react-bootstrap';
import './QuestionPoint.css';

const QuestionPoint = ({ option, correctAnswer }) => {
    // console.log('quiz', correctAnswer);
    return (
        <div className='option'>
                <input type="radio" id={option} name={correctAnswer} value={option}></input>
                <label htmlFor={option}>{option}</label>     
        </div>
    );
};

export default QuestionPoint;