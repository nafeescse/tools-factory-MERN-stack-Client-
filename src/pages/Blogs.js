import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center m-2'>
                <h2 className='py-3 text-decoration-underline text-error'>BLOGS</h2>
                <div className='w-5/6 mx-auto py-3 grid grid-cols-1 gap-3 '>
                    <div className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-1: How will you improve the performance of a React Application?</h3>
                        <p className='fs-5 text-justify p-3'>Answer: When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render. It then only updates the changed element in the actual DOM. This process is called diffing.React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate. What we can deduce here is that a state change in a React component causes a re-render. Likewise, when the state passes down to a child component as a prop, it re-renders the child and so on, which is fine because React must update the UI.

                        </p></div>

                    <div className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-2: What are the different ways to manage a state in a React application?</h3>
                        <p className='fs-5 text-justify p-3'>Answer: Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.</p></div>

                    <div className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-3: How does prototypical inheritance work?</h3>
                        <p className='fs-5 text-justify p-3'>Answer: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.  .</p></div>
                    <div className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-4: Why you do not set the state directly in React</h3>
                        <p className='fs-5 text-justify p-3'>Answer: One should never set the state directly because of the following reasons:
                        1. If you update it directly, calling the setState() afterward may just replace the update you made. 
                        2.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        3. You will lose control of the state across all components.
                        </p></div>
                    <div className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-5: What is a unit test? Why should write unit tests?</h3>
                        <p className='fs-5 text-justify p-3'>Answer: Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p></div>




                </div>
            </div>
        </div>
    );
};

export default Blogs;