import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { authContext } from '../../../AuthProvider/AuthProvider'

import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const NavigationBar = () => {
    const { user, userSignOut } = useContext(authContext);
    const handleSignOut = () =>{
        userSignOut()
        .then(() =>{
            toast.success("Sign Out succesful.")
            console.log(user)
        })
        .catch(error =>{
            toast.error("Sign Out fail.!")
        })
    }
  
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto d-flex gap-3">

                    <Link className='text-decoration-none text-black fw-bold' to="/">Home</Link>

                    <Link className='text-decoration-none text-black fw-bold' to="/login">Login</Link>
                    <Link className='text-decoration-none text-black fw-bold' to="/register">Register</Link>
                </Nav>
                <Nav className='d-flex justify-content-space-between align-items-center'>

                    {
                        user &&
                        <FaRegUserCircle style={{ fontSize: "2rem", marginRight:"1rem" }}></FaRegUserCircle>
                    }

                    {
                        user ? <Link>
                            <Button onClick={handleSignOut} variant="secondary">Logout</Button>
                        </Link> : <Link to='/login'>
                            <Button variant="secondary">Login</Button>
                        </Link>
                    }

                </Nav>
            </Navbar.Collapse>

        </Container>
        </Navbar>
        
    )
}

export default NavigationBar
