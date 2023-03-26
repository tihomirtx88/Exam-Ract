import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
    const isExpired = localStorage.getItem('userInfo');
    const navigate = useNavigate();
    
    return (
        <>
        {!isExpired
          ? navigate('/login')
          : <Outlet />}
        </>
    );
};

export default AuthWrapper;