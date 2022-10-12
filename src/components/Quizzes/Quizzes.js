import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizzes.css';

const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const { name, questions } = quizzes;

    // console.log(quizzes);
    
    return (
        <div>
            <h2 className='text-center py-3'>Quiz of {name}</h2>
            <div className='quiz_content'>
                <div>
                    {
                        questions.map(quiz => <Quiz
                            quiz={quiz}
                            key={quiz.id}
                        ></Quiz>)
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Quizzes;