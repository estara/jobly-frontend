import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import JoblyApi from './api.js';
import { CurrentUserContext, HasAppliedToJobDispatchContext, HasAppliedToJobContext } from './JoblyContext';

// render card with 1 job
function JobCard ( { job } ) {
    const currentUser = useContext(CurrentUserContext);
    const hasAppliedToJob = useContext(HasAppliedToJobContext);
    const setHasAppliedToJob = useContext(HasAppliedToJobDispatchContext);
  
    // apply to job
    async function handleClick (evt) {
        evt.preventDefault()
        await JoblyApi.apply(currentUser.username, job.id)
        setHasAppliedToJob([...hasAppliedToJob, job.id])
    }

    // display details on individual job
    return (
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-left">
              <h4>{job.title}</h4>
              <p>{job.companyName}</p>
            </CardTitle>
            <CardText className="font-bold text-left">
                <p>Salary: {job.salary}</p>
                <p>Equity: {job.equity}</p>
                </CardText>
                <Button onClick={handleClick}>{(hasAppliedToJob && hasAppliedToJob.includes(job.id)) ? "Applied" : "Apply"}</Button>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default JobCard;