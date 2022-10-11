import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from './Topics';

const Quiz = () => {
    const quizes = useLoaderData()
    console.log(quizes.data.questions)
    
    return (
        <div>
            <h2>this is quiz topics</h2>
            {
                quizes.data.questions.map(quiz => <Topics
                
                key = {quiz.id}
                quiz = {quiz}
                ></Topics>)
            }
        </div>
    );
};

export default Quiz;