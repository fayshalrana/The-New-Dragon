import React, { useContext } from 'react'
import { authContext } from '../AuthProvider/AuthProvider';
import {  Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, isLoading} = useContext(authContext)
    if(isLoading){
        return  <Spinner animation="border" />;
    }

    if(user){
        return children;
    }
    else{
        return (
           <>
           { toast.error("please loing your account")}
            <Navigate to="/login" state={{from:location }} replace></Navigate>
            </>
            )
    }

}

export default PrivateRoute
