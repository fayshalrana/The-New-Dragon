import React from 'react'
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBar from '../NavigationBar/navigationBar';

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>

      </div>

      <div className='d-flex p-3 bg-dark rounded'>
        <Button variant="danger">Latest</Button>
        <Marquee className='text-white' pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some text......
          I can be a React component, multiple React components, or just some text......
        </Marquee>
      </div>
        <NavigationBar></NavigationBar>
    </Container>
  )
}

export default Header
