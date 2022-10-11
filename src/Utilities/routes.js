import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home"
import Topics from "../components/Topics";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog";
import Quiz from "../components/Quiz";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
              path: '/',
              element: <Home></Home>,
              loader: async () => {
                return fetch('https://openapi.programming-hero.com/api/quiz')
              }
          },

          {
              path: '/home',
              loader: async () => {
                return fetch('https://openapi.programming-hero.com/api/quiz')
              },
              element: <Home></Home>
          },
          {
              path: '/topics',
              element: <Topics></Topics>
              
            },

            {
                path: 'topics/:topicsId',
                loader: async ({params}) => {
                  return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
                }, 
                element: <Quiz></Quiz>
              },
              
          {
              path: '/statistics',
              element: <Statistics></Statistics>
          },
          {
              path: '/blog',
              element: <Blog></Blog>
          },
        ]
      }
      
])
export default router;