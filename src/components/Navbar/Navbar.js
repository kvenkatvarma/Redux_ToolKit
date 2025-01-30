import "./Navbar.css";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login,logout } from "../../slices/users";
function Navbar(){
    let [userName,setUserName] = useState("John");
    let dispatch =useDispatch();
    let users = useSelector(state=>state.users);

    let onLoginClick =()=>{
       dispatch(login(userName));
    };

    let onLogoutClick=()=>{
        dispatch(logout());
    };

    return(
       <div className="nav">
        {!users.isLoggedIn ? <div>   <input type="text" placeholder="Username"  className= "form-control" value={userName} onChange={(event)=>{
            setUserName(event.target.value);
           }}></input>
           <button className="button button-blue" onClick={onLoginClick}>Login</button> </div>: <div> <i className="fas fa-user"></i>&nbsp;
             <span>{users.currentUser}</span>
             <button className="button button-red" onClick={onLogoutClick}>Logout</button>
            </div>}
        
       </div>
    )
}

export default Navbar;