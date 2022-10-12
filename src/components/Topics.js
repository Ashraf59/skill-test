import React from 'react';
import Option from './Option';
import { toast } from 'react-toastify'
import './Topics.css';
import { EyeSlashIcon } from '@heroicons/react/24/solid';
// import { useLoaderData } from 'react-router-dom';

const Topics = ({quiz}) => {
    // const quizes = useLoaderData()
    // console.log(quiz)
    const {id, options, correctAnswer, question } = quiz;

    const handleAnswer = (option) =>{
        if(option === correctAnswer){
            toast.success('Correct Answer', {autoClose: 500})

        }
        else {
            toast.error('Wrong Answer', {autoClose: 500})

        }
    }

    const handleIcon = (id) => {
        toast(`${correctAnswer}`, { autoClose: 1000 })
    }

    return (
     <div className='quiz'>
        <p className='text-center text-2xl mb-6 font-semibold text-gray-600'>Question:  {question}</p>
        <p><span onClick={() => handleIcon(id)}><EyeSlashIcon className="h-6 w-6 text-blue-500"/></span></p>
        <div className='m-auto'>  
            {
                options.map(option => <Option
                option = {option}
                handleAnswer = {handleAnswer}
                ></Option>)
            }
        </div>

     </div>
    );
};

export default Topics;