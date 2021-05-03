import React, { useState, useContext } from 'react';
import JoblyApi from './api.js';
import './Profile.css';
import { CurrentUserContext, CurrentUserDispatchContext } from './JoblyContext';

// display user info
function Profile () {
    const currentUser = useContext(CurrentUserContext);
    const setCurrentUser = useContext(CurrentUserDispatchContext);
    const initialState = {firstName: currentUser.firstName, lastName: currentUser.lastName, email: currentUser.email, password: ""};
    const [formData, setFormData] = useState(initialState);
    
    // handle user form input before submit
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    }
    
    // handle form submission to update user info
    async function handleSubmit (evt) {
        evt.preventDefault();
        console.log('start')
        console.log(currentUser.username, formData)
        const updated = await JoblyApi.updateUser(currentUser.username, formData);
        console.log(updated)
        setCurrentUser(updated);
        setFormData(initialState);
    }

    // render user info and form to update it
    return (
        <div>
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
                <p style={{fontWeight:"bold"}}>Username</p>
                <p>{currentUser.username}</p>
                <label for="firstName">First Name:</label><br/>
                <input type="text" name="firstName" placeholder={currentUser.firstName} onChange={handleChange}/><br/>
                <label for="lastName">Last Name:</label><br/>
                <input type="text" name="lastName" placeholder={currentUser.lastName} onChange={handleChange}/><br/>
                <label for="email">Email:</label><br/>
                <input type="text" name="email" placeholder={currentUser.email} onChange={handleChange}/><br/>
                <label for="password">Confirm password to make changes:</label><br/>
                <input type="password" name="password" onChange={handleChange}/><br/>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default Profile;