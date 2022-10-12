import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div className='d-flex justify-content-center align-items-center py-5 w-100 h-100'>
                <LineChart
                    width={400}
                    height={300}
                    data={topics}
                    margin={{
                        top: 5,
                        right: 40,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
        </div>
    );
};

export default Statistics;