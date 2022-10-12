import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='w-75 m-auto pt-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of the react router?</Accordion.Header>
                    <Accordion.Body>
                        A package called React Router aids developers in organizing and navigating various views in a React application. The React Router maintains the UI constant across various screen sizes and device kinds while making it simple to specify and render many routes in an application.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does the context API work in ReactJS?</Accordion.Header>
                    <Accordion.Body>
                        Create global variables that may be sent down a React component tree by using the React Context API. When you wish to exchange information that can be accessible by several app components without having to explicitly send props down at each level, you utilize the Context API.
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    );
};

export default Blog;