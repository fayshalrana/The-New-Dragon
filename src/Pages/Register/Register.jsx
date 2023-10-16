import React, { useContext, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Header from '../Sheard/Header/Header';
import NavigationBar from '../Sheard/NavigationBar/navigationBar';
import { Form } from 'react-bootstrap';
import { authContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';




const Register = () => {
  const {registerUser, user} = useContext(authContext);
  const [accept, setAccept] = useState(false);

  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.conPassword.value;

    const userName = user?.displayName;

    if(!/(?=.*?[A-Z])/.test(password)){
      toast.error("At least one uppercase");
      console.log(password)
      return;
    }else if(password !== confirmPassword){
      toast.error("password dosen't match!");
      return;
    }else if(!/(?=.*?[0-9])/.test(password)){
      toast.error("At least one digit");
      return;
    }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      toast.error("At least one special character");
      return;
    }else if(!/(?=^.{8,}$)/.test(password)){
      toast.error("Minimum six in length");
      return;
    }

    registerUser(email, password)
    .then(result =>{
      const user = result.user
      toast.success("User Register successful");
      form.reset();
      userName = name
    })
    .catch(error =>{
      const errorMsg = error.message;
      toast.error("Register Faild");
    })
  }

  const [values, setValues] = useState({
    password: "",
    showPassword : false
  })
  const handleShowPassword = () =>{
    setValues({...values, showPassword: !values.showPassword})
  }
const handleTerms = event =>{
  setAccept(event.target.checked)
}

  return (
<>
<MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

      <Form onSubmit={handleRegister}>
      <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Your Name' name='name' id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email' name='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' type={values.showPassword ? "text": "password"} name='password'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your password' id='form4' type='password' name='conPassword'/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox onClick={handleShowPassword} name='flexCheck' value='' id='flexCheckDefault' label='Show Password' />
        </div>
        <div className='mb-4'>
          <MDBCheckbox onClick={handleTerms} name='f-Check' value='' id='f-CheckDefault' label={<>accept <Link>term and conndision</Link></>} />
        </div>

        <button disabled={!accept} type='submite' className="btn btn-primary">Register</button>
      </Form>

      <span>Already have an account? <Link to="/login">Login</Link></span>
      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
</>
  )
}

export default Register
