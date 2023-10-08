import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h3>Login with</h3>
            <Button className='d-block my-1 w-100' variant="outline-primary"><FaGoogle />Login withGoogle</Button>
            <Button className='d-block my-1 w-100' variant="outline-secondary"><FaGithub />Login withGithub</Button>
            <div>
                <h3>Find us</h3>
                <ListGroup className='mt-3'>
                    <ListGroup.Item className='d-flex gap-2 align-items-center fw-bold fs-6'><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item className='d-flex gap-2 align-items-center fw-bold fs-6'><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item className='d-flex gap-2 align-items-center fw-bold fs-6'><FaInstagram/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img src={bg} alt="" />
                <div className='d-flex justify-content-center align-items-center flex-column h-100 gap-3 text-white position-absolute top-0 left-0 py-3 px-4 text-center'>
                    <h2>
                    Create an Amazing Newspaper
                    </h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default RightNav
