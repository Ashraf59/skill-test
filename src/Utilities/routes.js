import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home"
import Topics from "../components/Topics";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        
        
        children: [
          {
              path: '/',
              element: <Home></Home>
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
              path: '/statistics',
              element: <Statistics></Statistics>
          },
          {
              path: '/blog',
              element: <Blog></Blog>
          }
        ]
      }
      
])
export default router;