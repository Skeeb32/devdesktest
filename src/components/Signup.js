import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Signup = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Create an Account</h2>
                    <Link to='/devdesk/register'><button className='dev-sign-in-button'>I'm a Student</button></Link>
                    <Link to='/devdesk/login'><button className='dev-sign-in-button'>I'm a Dev Helper</button></Link>
            
                    <Link to='/devdesk/login'><p>Already have an account? Log in here.</p></Link>
                </div>
            </section>
        </div>
    )
};

export default Signup;