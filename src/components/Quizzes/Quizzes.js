import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizzes.css';

const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const { name } = quizzes;
    const questions = quizzes.questions;

    // console.log(questions);
    return (
        <div>
            <h2 className='text-center'>Quiz of {name}</h2>
            <div>
                {
                    questions.map(quiz => <Quiz
                        quiz={quiz}
                        key={quiz.id}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizzes;