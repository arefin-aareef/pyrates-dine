/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h3 className='text-center my-4'>Welcome To Blogs!</h3>
            <div>
                <h4>1. Differences between uncontrolled and controlled components.</h4>
                <p className='ms-5'>Controlled components give you more control over the form values, as you can validate, manipulate or transform the input values before submitting the form. However, they require more code to set up and maintain. <br /> Uncontrolled components are simpler to set up and use, but they are limited in terms of what you can do with the form values. They are suitable for simple forms with minimal validation or processing requirements.</p>

                <h4>2. How to validate React props using PropTypes</h4>
                <p className='ms-5'>PropTypes is a built-in typechecking library in React that allows you to define the types of the props that a component should receive. This helps to catch bugs early by ensuring that the props received by the component are of the expected type.</p>

                <h4>3. Difference between nodejs and express js.</h4>
                <p className='ms-5'>Node.js is a runtime environment for running JavaScript outside of a browser, while Express.js is a framework for building web applications using Node.js. Node.js provides a set of APIs for interacting with the file system, networking, and other low-level functionality, while Express.js provides a set of features for building HTTP servers and handling HTTP requests and responses. Express.js is built on top of Node.js and provides an easy-to-use API for handling common web development tasks such as routing, middleware, and template engines.</p>

                <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
                <p className='ms-5'>A custom hook is a reusable JavaScript function that uses one or more of the built-in React hooks, and potentially other functions, to encapsulate logic that can be used across multiple components. Custom hooks are useful for promoting code reuse and separation of concerns, and can help to improve the modularity, maintainability, and scalability of your React codebase.</p>
            </div>
        </Container>
    );
};

export default Blog;