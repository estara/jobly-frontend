import React, { useContext, useState } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import JoblyApi from './api.js';
import CompanyCard from './CompanyCard';
import './CompanyList.css';
import { CompaniesContext, CompaniesDispatchContext } from "./JoblyContext.js";

// display list of companies
function CompanyList() {
    const [formData, setFormData] = useState({})
    const {companies} = useContext(CompaniesContext);
    const setCompanies = useContext(CompaniesDispatchContext)


    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    }
    
    // handle search form submission
    async function handleSubmit (evt) {
        evt.preventDefault();
        if (!formData) {return};
        const newCompanies = await JoblyApi.getCompanies(formData);
        setCompanies(newCompanies);
        setFormData({});
    }
    console.log(companies)
    if (companies) {
    return (
        <div> <br/>
        <Form inline onSubmit={handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2">Company Name</Label>
                <Input type="text" name="name" id="name" onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="minEmployees" className="mr-sm-2">Minimum Employees</Label>
                <Input type="number" name="minEmployees" id="minEmployees" min="0" onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="maxEmployees" className="mr-sm-2">Maximum Employees</Label>
                <Input type="number" name="maxEmployees" id="maxEmployees" min="0" onChange={handleChange}/>
            </FormGroup>
            <Button>Filter</Button>
        </Form> <br/>
        {companies.map(company => (
        <CompanyCard company={company}/>
        ))}
        </div>
    );}
}

export default CompanyList;