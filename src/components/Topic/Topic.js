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
                <div>
                    <h5 className='m-0 p-0'>{name}</h5>
                    <small>Questions: <span className='text-danger'>{total}</span></small>
                </div>
                <button onClick={handleNavigate} className='border-0'>Start Practice</button>
            </div>
        </div>
    );
};

export default Topic;