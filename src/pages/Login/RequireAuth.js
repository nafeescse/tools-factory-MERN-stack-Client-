import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(loading){
        return <div className="flex justify-center items-center h-screen"><Loading/></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
    
};

export default RequireAuth;