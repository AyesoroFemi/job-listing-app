/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function JobPosting({jobs}) {
  return (
    <div className="job">
        {jobs?.map((job) => {
            return (
                <Link to={`/jobs/${job.id}`} className="job-card" key={job.id}>
                <h1>{job.title}</h1>
                <h4>{job.type}</h4>
                <p>{job.description}</p>
                <span>{job.location }  </span>
                <span>{job.salary}</span>
            </Link>
            )
        })}
    </div>
  )
}

export default JobPosting