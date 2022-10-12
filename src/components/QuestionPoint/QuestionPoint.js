import React from 'react';
// import { Form } from 'react-bootstrap';
import './QuestionPoint.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionPoint = ({ option, correctAnswer, handleQuestionsResult }) => {
    // console.log('quiz', correctAnswer);    
    let notify = () => {
        if (option === correctAnswer) {
            return toast("Your Answer is Correct");
        }
        else {
            return toast("Your Answer is Wrong")
        }
    } ;
    
    return (
        <div className='option'>
            <input onClick={notify} type="radio" id={option} name={correctAnswer} value={option}></input>
            <label onClick={() => handleQuestionsResult(option, correctAnswer)} htmlFor={option}>
                {option}
                <ToastContainer />                
            </label>     
        </div>
    );
};

export default QuestionPoint;