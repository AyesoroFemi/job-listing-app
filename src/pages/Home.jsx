// import { useEffect, useState } from "react"
import JobPosting from "../components/JobPosting"
import { useLoaderData } from "react-router-dom"

function Home() {
    // const [jobs, setJobs] = useState([])

     const jobs = useLoaderData()
     console.log(jobs)

    // useEffect(() => {
    //     fetchJobs()
    // }, [])

    // const jobPosting = {
    //     title: "Full stack dev",
    //     categories: "Full stack",
    //     time: "Remote",
    //     location: "Lagos, Nigeria",
    // }

    // localStorage.setItem("jobs", JSON.stringify(jobPosting))

  return (
    <div>
        <JobPosting jobs={jobs}/>
    </div>
  )
}

export default Home