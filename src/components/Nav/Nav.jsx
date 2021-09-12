import React from "react"
import "./Nav.scss"


const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__container nav__container-left">
                <h1 className="nav__container-item">Medium</h1>
                <h2 className="nav__container-item">Programming</h2>
            </div>


            <div className="nav__container nav__container right">
                <p className="nav__container-item">Become a member</p>
                <p className="nav__container-item">Sign in</p>
                <button className="nav__container-item">Get Started</button>
            </div>
        </nav>
    )       
};

export default Nav;