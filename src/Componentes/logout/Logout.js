import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button style={{height:"50px",width:"110px",backgroundColor:"crimson",fontFamily:"fantasy",fontSize:"1.5rem",position:"static",right:"16.5rem",bottom:"50rem"}}onClick={() => logout({returnTo: window.location.origin})}> 
        SALIR</button>
    );
};