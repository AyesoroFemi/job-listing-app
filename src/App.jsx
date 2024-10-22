import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import AddJob from './pages/AddJob'
import NotFound from './pages/NotFound'
import Job, { jobLoader } from './pages/Job'
import UpdateJob from './pages/UpdateJob'


const addJob = async (newJob) => {
  const res = await fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
  })
  return res
}

const updateJob = async( job ) => {
  const res = await fetch(`http://localhost:3000/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return res
}

const deleteJob = async (id) => {
  const res = await fetch(`http://localhost:3000/jobs/${id}`, {
      method: "DELETE",
  })
  return res
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/add-jobs",
          element: <AddJob addJob={addJob}/>
        },
        {
          path: "/jobs/:id",
          element: <Job deleteJob={deleteJob}/>,
          loader: jobLoader
        },
        {
          path: "/edit-jobs/:id",
          element: <UpdateJob updateJob={updateJob}/>,
          loader: jobLoader
        },
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    }
]
)

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
