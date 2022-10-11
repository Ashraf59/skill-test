import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';



const Course = ({course}) => {
    const {id, name, logo} = course;

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/topics/${id}`)
    }

    
    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
        <img
          className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
          src={logo}
          alt=''
        />
        <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>Quiz Name: {name}</p>
        
       
       <button
            onClick={handleNavigate}
            type='button'
            className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-teal-300 text-gray-800 hover:bg-cyan-400'
          >
            Start Test
          </button>
       
      </div>
    );
};

export default Course;