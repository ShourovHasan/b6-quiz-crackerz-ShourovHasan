import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import QuestionPoint from '../QuestionPoint/QuestionPoint';
import './Quiz.css';

const Quiz = ({ quiz, handleQuestionsResult }) => {
    const { question, options, correctAnswer } = quiz;
    const [answer, setAnswer] = useState('');
    // console.log('quiz', options);
    const handleCorrectAnswer = () => {
        // console.log(correctAnswer);
        setAnswer('Answer is: ' + correctAnswer);
    }
    
    
    return (
        <div className='quiz'>
            <div className='question_title'>
                <h5 className='text-center'> {question}</h5> 
                <p onClick={()=>handleCorrectAnswer()}><FontAwesomeIcon icon={faEye} /></p>
            </div>
            <div className='questions'>
                <form>
                    {
                        options.map((option, idx) => <QuestionPoint
                            key={idx}
                            correctAnswer={correctAnswer}
                            option={option}
                            handleQuestionsResult={handleQuestionsResult}
                        ></QuestionPoint>)
                    }
                </form>
                <div className='correct_answer'>
                    <h4>{answer}</h4>
                    {/* <div>
                        <button onClick={notify}>{correctAnswer}</button>
                        <ToastContainer />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Quiz;