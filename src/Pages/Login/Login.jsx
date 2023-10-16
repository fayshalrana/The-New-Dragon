import React, { useContext, useState } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button, Container } from 'react-bootstrap';
import { authContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const {loginUser} = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';


  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    loginUser(email, password)
    .then(result =>{
      const user = result.user;
      toast.success("Login succesful.")
      form.reset();
      navigate(from, {replace:true})
    })
    .catch(error =>{
      const errorMsg = error.message;
      toast.error("Login Faild!")
    })
  }
  const [values, setValues] = useState({
    password: "",
    showPassword: false
  })
const handleShowPassword =() =>{
  setValues({...values, showPassword: !values.showPassword})
}

  return (
    <>
      <Container>
        <MDBRow className='mt-5'>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
          </MDBCol>

          <MDBCol col='4' md='6'>


           <form onSubmit={handleLogin}>
           <MDBInput className='mb-4' label='Email address' name='email' type='email' size="lg" />
            <MDBInput className='mb-4' label='Password'name="password" type={values.showPassword ? "text" : "password"} size="lg" />


            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox onClick={handleShowPassword} name='flexCheck' value='' id='flexCheckDefault' label='Show Password' />
              <a href="!#">Forgot password?</a>
            </div>

            <Button type='submite' className="mb-4 w-100" size="lg">Sign in</Button>

           </form>
           <span>New in this site <Link to="/register">Register</Link></span>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
              <MDBIcon fab icon="facebook-f" className="mx-2" />
              Continue with facebook
            </MDBBtn>

          </MDBCol>

        </MDBRow>
      </Container>
    </>
  );
}

export default Login
