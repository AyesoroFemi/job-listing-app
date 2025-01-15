// import { useLoaderData } from "react-router-dom"

// import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../util/api";

function Listings() {

    const { data } = useQuery({
      queryKey: ["job-listing"],
      queryFn: fetchJobs
    })

  return (
    <div>
        {data?.map((job) => {
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