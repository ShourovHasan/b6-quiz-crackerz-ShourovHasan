import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/home/${id}`);
    }

    return (
        <div className='topic'>
            <div className='topic_logo'>
                <img src={logo} alt="" />
            </div>
            <div className='topic_content'>
                <h5>{name}</h5>
                <button onClick={handleNavigate} className='border-0'>Start Practice</button>
            </div>
        </div>
    );
};

export default Topic;