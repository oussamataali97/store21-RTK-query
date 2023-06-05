import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ()=>{
    const {tokens}=useSelector((state)=>state.users)
return(
    window.localStorage.getItem('userToken') ? <Outlet/> : <Navigate to='/sign-in'/>

)

}


export default PrivateRoute