import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if( isLoading ) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
         <div className="profile">
            <img src={user.picture} alt={user.name} />
            <h2 style={{fontSize:"2rem"}}>{user.name}</h2>
            <p style={{fontSize:"2rem",color:"black"}}>{user.email}</p>
         </div>

         )
    );
};