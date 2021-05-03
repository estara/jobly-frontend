import React from "react";
import JobCard from './JobCard';

// render list of job cards
function JobList({ rightJobs }) {

  if (!rightJobs) {
    return (<div><p>No jobs available</p></div>)
  }
  return (
    <div className="col-md-4">
      {rightJobs.map(job => (<JobCard job={job} />))}
    </div>
  );
}

export default JobList;