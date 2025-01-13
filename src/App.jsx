import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import AddJob from './pages/AddJob'
import NotFound from './pages/NotFound'
import Job from './pages/Job'
import UpdateJob from './pages/UpdateJob'
import Listings from './pages/Listings'


const fetchJobs = async () => {
  const res = await fetch("http://localhost:3000/jobs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data
};

const jobListing = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/jobs/${params.id}`);
  const data = await res.json();
  console.log("what is the param.id", params.id);
  return data;
};

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

// const deleteJob = async (id) => {
//   const res = await fetch(`http://localhost:3000/jobs/${id}`, {
//       method: "DELETE",
//   })
//   return res
// }

async function deleteJob (id) {
   const res = await fetch(`http://localhost:3000/jobs/${id}`, {
     method: "DELETE",
   });
   return res;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchJobs,
      },
      {
        path: "/add-jobs",
        element: <AddJob addJob={addJob} deleteJob={deleteJob} />,
      },
      {
        path: "/jobs/:id",
        element: <Job deleteJob={deleteJob} />,
        loader: jobListing,
      },
      {
        path: "/edit-jobs/:id",
        element: <UpdateJob updateJob={updateJob} />,
        loader: jobListing,
      },
      {
        path: '/listing',
        element: <Listings/>,
        loader: fetchJobs
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
