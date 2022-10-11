import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center text-gray-500 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-gray-500 focus:outline-none focus-visible:ring-violet-400">What is the purpose of React Router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React Router is a standard library for routing in React. It <strong>enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</strong>.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-gray-500 focus:outline-none focus-visible:ring-violet-400">How does Context API works?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The React Context API is <strong>a way for a React app to effectively produce global variables that can be passed around</strong>. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-gray-500 focus:outline-none focus-visible:ring-violet-400">useRef Hook Explanation?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The hook useRef() in React returns an object that has a property current that we can access as we do with objects. This property is initialized to the passed argument in the function useRef() . The returned object will persist for the full lifetime of the component. <br /><br />
                        1. The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object.
                        <br />
                        2. In order to use the hook useRef , you will have to import it from the React package first.
                        </p>
                    </details>
                </div>
            </div>
        </section>

    );
};

export default Blog;