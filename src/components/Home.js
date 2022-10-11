import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroImage from "../assets/hero-1.jpg"
import Course from './Course';
import './Home.css'

const Home = () => {
  const courses = useLoaderData()
  
    
    return (
        <section>
          <div className="bg-gray-100">
            <div className="container flex flex-col items-center px-4 py-12 pb-12 mx-auto text-center lg:pb-56 md:py-16 md:px-8 lg:px-32 text-gray-900">
              <h1 className="text-2xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                Programming Quiz Test
              </h1>
              <p className="mt-6 mb-2 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                This is a quiz contest to justify your skills on progrmming,
                Please selecet your programming language and start the skills test.
              </p>
              
            </div>
          </div>
          <img
            src={HeroImage}
            alt=""
            className="mx-auto mb-12 -mt-5 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
          />
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>

              
          {
            
            courses.data.map(course => <Course
          
          key = {course.id}
          course = {course}
          ></Course>)
          
        }
            </div>
            </div>
        </section>
      );
    };
    
    export default Home;
    