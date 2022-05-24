import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();
 

    if(loading ||adminLoading){
        return <div className="flex justify-center items-center h-screen"><Loading/></div>
    }
    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
    
};

export default RequireAdmin;