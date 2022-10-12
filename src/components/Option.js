import React from 'react';

const Option = ({option, handleAnswer}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 md:w-full'>
            <button onClick={()=> handleAnswer(option)}
              type='button'
              className='px-8 block m-auto mt-4 py-3 font-semibold rounded-full bg-teal-300 text-gray-900 hover:bg-cyan-400 hover:text-white'
            >
                <p>{option}</p>
            </button>
        </div>
    );
};

export default Option;