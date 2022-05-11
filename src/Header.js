import React from "react"
import Logo from "./nklogo.jpg"
const Header=()=>{
    return<>
    <div className="header">
    <img src={Logo} alt="logo" width="70px" height="50px"/>
    <h1>nk clone app </h1>
    </div>
    </>
}

export default Header;