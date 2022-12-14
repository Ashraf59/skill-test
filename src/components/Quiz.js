import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from './Topics';

const Quiz = () => {
    const quizes = useLoaderData()
    // console.log(quizes.data.questions)
    
    return (
        <div className='px-4 py-16 mx-auto max-w-sm md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>

            <h2 className="text-2xl font-semibold sm:text-4xl text-center text-gray-500 mb-8">Start Your Skill Test</h2>

        <div className='bg-gray-100'>
                        
        {
                quizes.data.questions.map(quiz => <Topics
                
                key = {quiz.id}
                quiz = {quiz}
                ></Topics>)
            }

        </div>
            
            
                   
                   
         </div>
    );
};

export default Quiz;