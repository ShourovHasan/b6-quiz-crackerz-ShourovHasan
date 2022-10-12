import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div className='body_container'>
            <div>
                <h2 className='text-center'>This is Header</h2>
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