import React from 'react';
import QuestionPoint from '../QuestionPoint/QuestionPoint';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;
    // console.log('quiz', options);
    
    return (
        <div className='quiz'>
            <div className='question_title'>
                <h5 className='text-center'> {question}</h5> 
                <p></p>
            </div>
            <div className='questions'>
                <form>
                    {
                        options.map((option, idx) => <QuestionPoint
                            key={idx}
                            correctAnswer={correctAnswer}
                            option={option}
                        ></QuestionPoint>)
                    }
                </form>
            </div>
        </div>
    );
};

export default Quiz;