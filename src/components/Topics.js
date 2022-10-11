import React from 'react';
import Option from './Option';
// import { useLoaderData } from 'react-router-dom';

const Topics = ({quiz}) => {
    // const quizes = useLoaderData()
    console.log(quiz)
    const {id, options, correctAnswer, question } = quiz;
    

    return (
     <div>
           
     <div className=' p-12 rounded shadow-lg w-2/4 m-auto'>
           <div className='mb-5 text-xl font-bold leading-none sm:text-2xl my-15 bg-gray-100 p-12'>
           <p className='text-center mb-8'>Question:  {question}</p>
            
            <div className='m-auto'>
                
            {
                options.map(option => <Option
                option = {option}
                ></Option>)
            }
            </div>
            

           </div>
           
      </div>
     </div>
    );
};

export default Topics;