import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css';

const Home = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
    return (
        <div className='body_container'>
            <div>
                <h2 className='text-center'>This is Header</h2>
            </div>
            <div className='topics'>
                {
                    quizes.map(quiz => <Quiz quiz={quiz} key={quiz.id}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;