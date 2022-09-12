import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = ({ logout, token }) => {
    return (
        <header>
            <nav>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/posts'>Posts</Link>
                <Link className='navLink' to='/profile'>Profile</Link>

                {
                    !token ? 
                    <>
                    <Link className='navLink' to='/register'>Register</Link>
                    <Link className='navLink' to='/login'>Login</Link>
                    </>
                   : <Link className='navLink' to='/' onClick={() => { logout() }}>Logout</Link>
                    
                }
            </nav>
        </header>
    )
}

export default Navbar;


//HW for weekend
// work on login component
// work on upgrading the posts view based on user being logged in or not