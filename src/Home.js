import React from 'react';
import { Button } from 'reactstrap';

// display home page
function Home () {
    return(
        <div>
            <p>Welcome to Jobly! <br/>
            Please sign in or create an account to see our companies and jobs.</p>
            <Button color="primary" href="/login">Log In</Button><br/>
            <Button color="primary" href="/signup">Sign Up</Button>
        </div>
    )
}

export default Home;