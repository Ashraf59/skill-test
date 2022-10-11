import React from 'react';
import Option from './Option';
// import { useLoaderData } from 'react-router-dom';

const Topics = ({quiz}) => {
    // const quizes = useLoaderData()
    console.log(quiz)
    const {id, options, correctAnswer, question } = quiz;

    return (
     <div className='bg-gray-100 p-6 rounded shadow-lg'>
           <div className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
           <p>Question: {question}</p>
            
            <p>Options: <li>{options}</li></p>
            <p>Correct Answer: {correctAnswer}</p>

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