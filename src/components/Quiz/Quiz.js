import React from 'react';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='topic'>
            <div className='topic_logo'>
                <img src={logo} alt="" />
            </div>
            <div className='topic_content'>
                <h5>{name}</h5>
                <button className='border-0'>Start Practice</button>
            </div>
        </div>
    );
};

export default Quiz;