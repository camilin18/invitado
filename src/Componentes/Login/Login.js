import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import 'boxicons';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    

    return <button style={{height:"50px",width:"110px",backgroundColor:"cyan",fontFamily:"fantasy",fontSize:"1.5rem",position:"static",right:"16.5rem",bottom:"40rem"}} onClick={()=> loginWithRedirect()}>INGRESAR
    </button>
    
}
<div/>