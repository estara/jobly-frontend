import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import JobList from './JobList';
import JoblyApi from './api.js';

// display details and jobs at single company
function CompanyDetail () {
  const { handle } = useParams();
  const history = useHistory();
  const [company, setCompany] = useState({});

  useEffect(() => {
    async function onLoad() {
        // find correct company
        try {
        const newCompany = await JoblyApi.getCompany(handle);
        setCompany(newCompany);
        } catch (err) {
        console.log('redirect'); 
        history.push('/companies');
        }
    }
    onLoad()
  }, [])
  
  // render details and list of jobs at individual company
  return (
    <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        <p>Employees: {company.numEmployees}</p>
        <JobList rightJobs={company.jobs}/>
    </div>
  );
}

export default CompanyDetail;