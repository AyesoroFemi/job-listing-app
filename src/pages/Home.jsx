// import { useEffect, useState } from "react"
// import { useQuery } from "react-query"
import { useQuery } from "@tanstack/react-query";
import JobPosting from "../components/JobPosting"
import { fetchJobs } from "../util/api";
// import { useLoaderData } from "react-router-dom"

function Home() {
   

    const {data, isLoading, error} = useQuery({
      queryKey: ["jobs"],
      queryFn: fetchJobs,
    });

    //  if (isLoading) return "Loading...";
    if(isLoading) {
      return (
        <h1>Loading....</h1>
      )
    }

    if(error) {
      return (
        <h1>Error: {error.message}</h1>
      )
    }

  return (
    <div>
        <JobPosting jobs={data}/>
    </div>
  )
}

export default Home