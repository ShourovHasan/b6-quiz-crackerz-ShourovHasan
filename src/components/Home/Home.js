import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div className='body_container'>
            <div className='project_info'>
                <div className='banner'>
                    <img src="quiz_banner.png" alt="" />
                </div>
                <div className='header_info'>
                    <p>Welcome to <strong>AIUB Quiz Crackers</strong>. Our website is a great way to get ahead in your studies! We have a wide range of quizzes to help you learn and remember key information for your exams. Plus, our quizzes are always up-to-date, so you can be sure you're getting the most out of your study time.</p>
                </div>
            </div>
            <div className='topics'>
                {
                    topics.map(topic => <Topic topic={topic} key={topic.id}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;