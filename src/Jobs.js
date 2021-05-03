import React, { useContext, useState } from 'react';
import JobList from './JobList';
import JoblyApi from './api.js';
import './Jobs.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { JobsContext, JobsDispatchContext } from './JoblyContext';

// display all jobs
function Jobs () {
    const initialState = {title: null, minSalary: null, hasEquity: false};
    const {jobs} = useContext(JobsContext);
    const setJobs = useContext(JobsDispatchContext);
    const [formData, setFormData] = useState(initialState)

    // handle entry of information into form
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    }
    
    // handle form submission
    async function handleSubmit (evt) {
        evt.preventDefault();
        if (!formData) {return};
        console.log(formData)
        
        try {
            console.log('trying')
            const newJobs = await JoblyApi.getJobs(formData);
            if (newJobs.jobs.length === 0) {console.log('nope')}
            console.log(newJobs)
            setJobs(newJobs);
            setFormData(initialState);
        } catch (err) {
            return(<p>No jobs matching that criteria.</p>)
        }
        
    }

    // render form to filter jobs and render list of jobs
    return (
        <div> <br />
        <Form inline onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title" >Job Title </Label>
                <Input type="text" name="title" id="title" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="minSalary">Minimum Salary </Label>
                <Input type="number" name="minSalary" id="minSalary" min="0" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="hasEquity">Equity </Label>
                <div class="check"><Input type="checkbox" name="hasEquity" id="hasEquity" value="true" placeholder="off" onChange={handleChange}/></div>
            </FormGroup>
            <Button class="search">Search</Button>
        </Form>
        <JobList rightJobs={jobs}/>
        </div>
    );
}

export default Jobs;