import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const RouteGuard = ({children}) => {

    const { user } = useContext(UserContext);

    if (!user.accessToken) {
       return <Navigate to='/login'/>
    }

    return children ? children : <Outlet/>
  
};

export default RouteGuard;