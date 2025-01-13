/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { useLoaderData, useNavigate, useParams } from "react-router";
import { useLoaderData, useNavigate } from "react-router";

import { toast } from "react-toastify";

function Job({ deleteJob }) {
//   const [job, setJob] = useState({});
  const job = useLoaderData()
  // loader jobLoader

//   console.log("what is jobData", jobData)

//   const { id } = useParams();
  // console.log(id.id)

  const navigate = useNavigate()

//   const fetchJob = async (id) => {
//     const res = await fetch(`http://localhost:3000/jobs/${id}`);
//     const data = await res.json();
//     setJob(data);
//   };

//   useEffect(() => {
//     fetchJob(id);

//   }, [])



  const handleDelete = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?")
    if(!confirm) return 
    deleteJob(jobId)
    toast.success("Job Deleted Successfully")
    navigate("/")
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <h4>{job.type}</h4>
      <p>{job.description}</p>
     <div>
        <span>{job.location} </span>
        <span>{job.salary}</span>
     </div>
     <h4>{job?.company?.name}</h4>
     <p>{job?.company?.description}</p>
     <p>{job?.company?.contactEmail}</p>
     <p>{job?.company?.contactPhone}</p>
     <button onClick={() => handleDelete(job.id)}>Delete</button>
     <button onClick={() => navigate(`/edit-jobs/${job.id}`)}>Edit</button>
    </div>
  );
}


// const jobLoader = async ({ params }) => {
//     const res = await fetch(`http://localhost:3000/jobs/${params.id}`)
//     const data = await res.json()
//     console.log('what is the param.id', params.id)
//     return data
// }

export { Job as default }


