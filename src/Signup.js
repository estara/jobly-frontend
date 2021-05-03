import React, { useState } from 'react';
import './Signup.css';
import { Form, Input, FormGroup, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Signup ({ signup }) {
    const initialState = {username: "", firstName: "", lastName: "", email: "", password: ""}
    const [formData, setFormData] = useState(initialState)
    const history = useHistory();

    // handle user form input before submit
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
        await signup(formData);
        setFormData(initialState);
        history.push('/companies')
    }

    return (
        <div>
            <h1>Sign up</h1>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} required/><br/>
                <Input type="text" name="firstName" placeholder="First name" onChange={handleChange} required/><br/>
                <Input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required/><br/>
                <Input type="text" name="email" placeholder="Email" onChange={handleChange} required/><br/>
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} required/><br/>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Signup;