import { useEffect, useState } from "react"
import JobPosting from "../components/JobPosting"

function Home() {
    const [jobs, setJobs] = useState([])

    const fetchJobs = async () => {
        const res = await fetch("http://localhost:3000/jobs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        setJobs(data)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

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