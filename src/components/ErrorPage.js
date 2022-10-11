import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-teal-500 dark:text-gray-600">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl text-gray-500 font-semibold md:text-3xl">Quiz not found</p>
                <p className="mt-4 mb-8 dark:text-gray-400">This quiz was either deleted by the owner or taken down by the Skill Test Website</p>
                <Link to='/home' className='bg-teal-300 hover:bg-cyan-400 text-black font-bold p-3 rounded-md'>Back to Home</Link>
            </div>
        </div>
    </section>
            
        
    );
};

export default ErrorPage;