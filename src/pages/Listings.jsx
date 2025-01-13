import { useLoaderData } from "react-router-dom"

function Listings() {
    const jobs = useLoaderData()
    console.log(jobs)

  return (
    <div>
        {jobs.map((job) => {
            return (
              <div key={job.id}>
                <h1>{job.title}</h1>
                <h3>{job.description}</h3>
              </div>
            );
        })}
    </div>
  )
}

export default Listings