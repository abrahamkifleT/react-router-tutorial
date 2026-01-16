import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className='jobs'>
     {
      jobsData.map((job) => (
        <Link to={`/jobs/${job.id}`} key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.location}</p>
        </Link>
      ))
     }
    </div>
  )
}

export default Jobs

export const jobsLoader = async () => {
    const res = await fetch("http://localhost:5000/jobs")
    const data = await res.json()
    return data
}