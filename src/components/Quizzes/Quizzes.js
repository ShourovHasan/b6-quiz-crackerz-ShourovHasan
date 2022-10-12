import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizzes.css';


const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const { name, questions } = quizzes;
    
    const [correctQAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);

    // console.log(quizzes);
    const handleQuestionsResult = (option, correctAnswer) => {
        // console.log(option, correctAnswer);
        if (option === correctAnswer) {
            setCorrectAnswer(correctQAnswer + 1);
            console.log(correctQAnswer);
        }
        else {
            setWrongAnswer(wrongAnswer + 1);
            console.log(wrongAnswer);
        }
    }
    return (
        <div>
            <h2 className='text-center py-3'>Quiz of {name}</h2>
            <div className='quiz_content'>
                <div>
                    {
                        questions.map(quiz => <Quiz
                            quiz={quiz}
                            key={quiz.id}
                            handleQuestionsResult={handleQuestionsResult}
                        ></Quiz>)
                    }
                </div>
                <div className='answer_container'>
                    <h5 className='text-center bg-success bg-opacity-50 py-1 border-0 rounded-2 text-white'>Answer Sheet</h5>
                    <p className='p-0 m-0'>Correct Answer: <strong className='text-success'>{correctQAnswer}</strong></p>
                    <p className='p-0 m-0'>Wrong Answer: <strong className='text-danger'>{wrongAnswer}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Quizzes;