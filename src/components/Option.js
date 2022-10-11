import React from 'react';

const Option = ({option}) => {
    return (
        <div>
             
       <button
            type='button'
            className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-teal-300 text-gray-800 hover:bg-cyan-400'
          >
            <p>{option}</p>
          </button>
        </div>
    );
};

export default Option;