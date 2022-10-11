import React from 'react';
import Option from './Option';
import './Topics.css'
// import { useLoaderData } from 'react-router-dom';

const Topics = ({quiz}) => {
    // const quizes = useLoaderData()
    console.log(quiz)
    const {id, options, correctAnswer, question } = quiz;
    

    return (
     <div className='quiz'>
        <p className='text-center text-2xl mb-6 font-semibold text-gray-600'>Question:  {question}</p>
        <div className='m-auto'>  
            {
                options.map(option => <Option
                option = {option}
                ></Option>)
            }
        </div>
     </div>
    );
};

export default Topics;