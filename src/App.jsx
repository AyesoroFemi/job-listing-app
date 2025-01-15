import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import AddJob from './pages/AddJob'
import NotFound from './pages/NotFound'
import Job from './pages/Job'
import UpdateJob from './pages/UpdateJob'
import Listings from './pages/Listings'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: fetchJobs,
      },
      {
        path: "/add-jobs",
        element: <AddJob />,
      },
      {
        path: "/jobs/:id",
        element: <Job />,
        // loader: jobListing,
      },
      {
        path: "/edit-jobs/:id",
        element: <UpdateJob />,
        // loader: jobListing,
      },
      {
        path: '/listing',
        element: <Listings/>,
        // loader: fetchJobs
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
